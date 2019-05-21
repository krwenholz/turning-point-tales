import * as d3 from 'd3';
import 'd3-selection-multi';


const colors = d3.scaleOrdinal(d3.schemeCategory10);


// TODO(kyle): Get the damn labels working in FF
// TODO(kyle): make the SVG panable/scrollable
// TODO(kyle): better default layout
// TODO(kyle): truncated labels

// Sources of inspiration
// start: https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7
// arrows: https://stackoverflow.com/questions/36579339/how-to-draw-line-with-arrow-using-d3-js
// titles: https://stackoverflow.com/questions/16204883/d3-js-updating-title-for-svg-path
// nice curves: https://stackoverflow.com/questions/55431818/change-d3-force-layout-link-style-to-match-d3-tree-look
// colors: https://stackoverflow.com/questions/38391411/what-is-the-d3-js-v4-0-equivalent-for-d3-scale-category10

/**
 * Starts a story graph animation on the specificed svg and for the given data.
 *
 * @param {Object} storyData The story to render.
 * @param {String} svgSelector The svg query selector.
 * @returns {Object} Returns the simulation object (so you can stop it if you want to redraw).
 */
const graph = (storyData, svgSelector) => {
  const targetSvg = clearSvg(svgSelector);
  const svg = d3.select(targetSvg);
  const width = Number(targetSvg.getBoundingClientRect().width);
  const height = Number(targetSvg.getBoundingClientRect().height);

  const simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-70))
    .force("link", d3.forceLink().id((d) => d.id).distance(100).strength(1))
    .force("center", d3.forceCenter(width / 2, height / 2));

  defineArrows(svg);

  const graph = graphFrom(storyData);

  startAnimation(svg, simulation, graph);

  return simulation;
}

const clearSvg = (svgSelector) => {
  const targetSvg = document.querySelector(svgSelector);
  while (targetSvg.firstChild) {
    targetSvg.removeChild(targetSvg.firstChild);
  }

  return targetSvg;
}

const defineArrows = (svg) => {
  //arrow
  svg.append("defs").append("marker")
    .attrs({
      "id": "arrowhead",
      "markerHeight": 10,
      "markerWidth": 15,
      "orient": "auto",
      "refX": 16,
      "refY": 0,
      "xoverflow": "visible",
      "viewBox": "-0 -5 10 10",
    })
    .append("svg:path")
    .attr("d", "M 0,-5 L 10 ,0 L 0,5")
    .style("fill", "#999")
    .style("stroke", "none");
}

const graphFrom = (storyData) => {
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

const startAnimation = (svg, simulation, graph) => {
  // First define animation functions
  const dragstarted = (d) => {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  const dragged = (d) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  const dragended = (d) => {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  // Tell the svg how we style a link
  // first, grab all  ".link" elements (they may not exist) if they do exist
  const link = svg.selectAll(".link")
    // next say that we want to associate some data with these elements
    .data(graph.links)
    // `enter` lets us virtually create the elements that don"t exist
    .enter()
    // put some attributes on the nice group element (which holds our line and some text)
    // note the "circular" reference here that creates things that weren"t here before
    // but later on might be grabbed by our `selectAll` and updated to match whatever we define
    // later
    // Stick a "line" element in there
    .append("line")
    .attr("class", "link")
    .attr("marker-end", "url(#arrowhead)");

  // Adding labels to lines is hard, so we use a containing "path" element
  const linkPath = svg.selectAll(".linkpath")
    .data(graph.links)
    .enter()
    .append("path")
    .attrs({
      "class": "linkpath",
      "fill-opacity": 0,
      "stroke-opacity": 0,
      "id": (d, i) => `linkpath${i}`,
    })
    .style("pointer-events", "none");

  const linkLabel = svg.selectAll(".linklabel")
    .data(graph.links)
    .enter()
    .append("text")
    .style("pointer-events", "none")
    .attrs({
      "class": "linklabel",
      "id": (d, i) => `linklabel${i}`,
      "font-size": 10,
      "fill": "#aaa"
    });

  linkLabel.append("textPath")
    .attr("xlink:href", (d, i) => `#linkpath${i}`)
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .attr("startOffset", "50%")
    .text((d) => {
      const label = d.label;

      if (label < 9) return label;

      return d.label.slice(0, 9) + '...';
    });

  // Tell the svg how we style a node
  const node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter()
    // Use a group to gather the bits we need for a single node: e.g. circle and text
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  node.append("circle")
    .attr("r", 7)
    .style("fill", (d, i) => {
      return colors(i);
    });

  node.append("text")
    // Offset the text so it isn"t _in_ the circle
    .attr("dy", -10)
    .text((d) => d.name);

  // Define how our SVG elements move. If you want to see it and it needs to move, you
  // need code in here. The `d` data piece is either the link or node we fed into the
  // simulation, so below you"ll see links use the source and target props and the nodes
  // use straight up coordinates.
  const ticked = () => {
    // Move the links around based on their pointy ends
    link.attrs({
      "x1": (d) => d.source.x,
      "y1": (d) => d.source.y,
      "x2": (d) => d.target.x,
      "y2": (d) => d.target.y,
    });

    // Nodes get a nice translate motion
    node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    // Adjust the linkPath position and box size so we can work on the text label within that
    linkPath.attr("d", (d) => `M ${d.source.x} ${d.source.y} L ${d.target.x} ${d.target.y}`);

    // Now rotate that label!
    // Use a function, because `this`
    linkLabel.attr("transform", (d) => {
      if (d.target.x < d.source.x) {
        const bbox = this.getBBox();
        const rx = bbox.x + bbox.width / 2;
        const ry = bbox.y + bbox.height / 2;
        return `rotate(180 ${rx} ${ry})`;
      } else {
        return "rotate(0)";
      }
    });
  }
  // Add nodes to our simulation
  simulation
    .nodes(graph.nodes)
    .on("tick", ticked);

  // Add the links to our simulation
  simulation.force("link")
    .links(graph.links);
}

const validateStoryNode = (title, node) => {
  if (!node) {
    throw `Expected to find a storyNode "${title}" but failed`;
  }
  if (!node["text"]) {
    throw `Your storyNode "${title}" needs a text field`;
  }

  if (node["final"]) return;

  if (!node["decisions"]) {
    throw `Your storyNode "${title}" needs a decisions field`;
  }
  if (node["decisions"].length < 1) {
    throw `Your storyNode "${title}" needs at least one decision`;
  }
  const decisions = node["decisions"];
  for (const ii in node["decisions"]) {
    if (!decisions[ii]["label"]) {
      throw `Your decision "${title}.${ii}" needs a label field`;
    }
    if (!decisions[ii]["storyNode"]) {
      throw `Your decision "${title}.${ii}" needs a storyNode field`;
    }
  }
}

export {
  graph,
  validateStoryNode
}
