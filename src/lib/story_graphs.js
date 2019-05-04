import * as d3 from 'd3';
import 'd3-selection-multi';

/**
 * Starts a story graph animation on the specificed svg and for the given data.
 *
 * @param {Object} data The story to render.
 * @param {String} svgSelector The svg query selector.
 * @returns {Object} Returns the simulation object (so you can stop it if you want to redraw).
 */
function draw(data, svgSelector) {
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

  startAnimation(svg, simulation, data.links, data.nodes);

  return simulation;
}

function startAnimation(svg, simulation, links, nodes) {
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  const link = svg.selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr('marker-end', 'url(#arrowhead)')

  link.append("title")
    .text(function(d) {
      return d.type;
    });

  const edgepaths = svg.selectAll(".edgepath")
    .data(links)
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
    .data(links)
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
      return d.type
    });

  const node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", (d) => dragstarted(d, simulation))
      .on("drag", dragged)
      //.on("end", dragended)
    );

  node.append("circle")
    .attr("r", 5)
    .style("fill", function(d, i) {
      return colors(i);
    })

  node.append("title")
    .text(function(d) {
      return d.id;
    });

  node.append("text")
    .attr("dy", -3)
    .text(function(d) {
      return d.name + ":" + d.label;
    });

  simulation
    .nodes(nodes)
    .on("tick", () => ticked(link, node, edgelabels, edgepaths));

  simulation.force("link")
    .links(links);
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
