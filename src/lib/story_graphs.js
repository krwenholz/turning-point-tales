import * as d3 from 'd3';
import 'd3-selection-multi';

/**
 * Starts a story graph animation on the specificed svg and for the given data.
 *
 * @param {Object} storyData The story to render.
 * @param {String} svgSelector The svg query selector.
 * @returns {Object} Returns the simulation object (so you can stop it if you want to redraw).
 */
function draw(storyData, svgSelector) {
  const targetSvg = document.querySelector(svgSelector);
  while (targetSvg.firstChild) {
    targetSvg.removeChild(targetSvg.firstChild);
  }

  const svg = d3.select(targetSvg);
  const width = Number(targetSvg.getBoundingClientRect().width);
  const height = Number(targetSvg.getBoundingClientRect().height);

  svg.append('defs').append('marker')
    .attrs({
      'id': 'arrowhead',
      'viewBox': '-0 -5 10 10',
      'refX': 13,
      'refY': 0,
      'orient': 'auto',
      'markerWidth': 13,
      'markerHeight': 13,
      'xoverflow': 'visible'
    })
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke', 'none');

  const simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) {
      return d.id;
    }).distance(100).strength(1))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

  const {
    nodes,
    links
  } = graphFrom(storyData);

  startAnimation(svg, simulation, nodes, links);

  return simulation;
}

function graphFrom(storyData) {
  const toVisit = [{
    title: "start",
    node: storyData.start
  }]
  const visited = new Set([]);
  const nodes = []; // name, id
  const links = []; // source, target, label

  while (toVisit.length) {
    const {
      title,
      node
    } = toVisit.shift();
    validateStoryNode(title, node);

    // Avoid loops
    if (visited.has(title)) continue;
    visited.add(title);

    nodes.push({
      name: title,
      id: title
    });

    const decisions = node.decisions || [];
    for (const decision of decisions) {
      const next = decision.storyNode;

      links.push({
        source: title,
        target: next,
        label: decision.label
      })
      toVisit.push({
        title: next,
        node: storyData[next]
      })
    }
  }

  return {
    nodes,
    links
  }
}

function validateStoryNode(title, node) {
  if (!node) {
    alert(`Expected to find a storyNode "${title}" but didn't`);
    throw "NoNode";
  }
  if (!node["text"]) {
    alert(`Your storyNode "${title}" needs a text field`);
    throw "NoText";
  }

  if (node["final"]) return;

  if (!node["decisions"]) {
    alert(`Your storyNode "${title}" needs a decisions field`);
    throw "NoDecisions";
  }
  if (node["decisions"].length < 1) {
    alert(`Your storyNode "${title}" needs at least one decision`);
    throw "NotEnoughDecisions";
  }
  const decisions = node["decisions"];
  for (const ii in node["decisions"]) {
    if (!decisions[ii]["label"]) {
      alert(`Your decision "${title}.${ii}" needs a label field`);
      throw "BadDecisions";
    }
    if (!decisions[ii]["storyNode"]) {
      alert(`Your decision "${title}.${ii}" needs a storyNode field`);
      throw "BadDecisions";
    }
  }
}

function startAnimation(svg, simulation, nodeData, linkData) {
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  const links = svg.selectAll(".link")
    .data(linkData)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr('marker-end', 'url(#arrowhead)')

  links.append("title")
    .text(function(d) {
      return d.label;
    });

  const edgepaths = svg.selectAll(".edgepath")
    .data(linkData)
    .enter()
    .append('path')
    .attrs({
      'class': 'edgepath',
      'fill-opacity': 0,
      'stroke-opacity': 0,
      'id': function(d, i) {
        return 'edgepath' + i
      }
    })
    .style("pointer-events", "none");

  const edgelabels = svg.selectAll(".edgelabel")
    .data(linkData)
    .enter()
    .append('text')
    .style("pointer-events", "none")
    .attrs({
      'class': 'edgelabel',
      'id': function(d, i) {
        return 'edgelabel' + i
      },
      'font-size': 10,
      'fill': '#aaa'
    });

  edgelabels.append('textPath')
    .attr('xlink:href', function(d, i) {
      return '#edgepath' + i
    })
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .attr("startOffset", "50%")
    .text(function(d) {
      return d.label
    });

  const nodes = svg.selectAll(".node")
    .data(nodeData)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", (d) => dragstarted(d, simulation))
      .on("drag", dragged)
      //.on("end", dragended)
    );

  nodes.append("circle")
    .attr("r", 5)
    .style("fill", function(d, i) {
      return colors(i);
    })

  nodes.append("title")
    .text(function(d) {
      return d.id;
    });

  nodes.append("text")
    .attr("dy", -3)
    .text(function(d) {
      return d.name;
    });

  simulation
    .nodes(nodeData)
    .on("tick", () => ticked(links, nodes, edgelabels, edgepaths));

  simulation.force("link")
    .links(linkData);
}

function ticked(link, node, edgelabels, edgepaths) {
  link
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });

  node.attr("transform", function(d) {
    return "translate(" + d.x + ", " + d.y + ")";
  });

  edgepaths.attr('d', function(d) {
    return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
  });

  edgelabels.attr('transform', function(d) {
    if (d.target.x < d.source.x) {
      const bbox = this.getBBox();

      const rx = bbox.x + bbox.width / 2;
      const ry = bbox.y + bbox.height / 2;
      return 'rotate(180 ' + rx + ' ' + ry + ')';
    } else {
      return 'rotate(0)';
    }
  });
}

function dragstarted(d, simulation) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart()
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

export {
  draw
}