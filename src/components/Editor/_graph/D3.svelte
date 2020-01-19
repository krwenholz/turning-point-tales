<script>
  import * as d3 from "d3";
  import "d3-selection-multi";
  import { filter, min } from "lodash";

  // Sources of inspiration
  // start: https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7
  // arrows: https://stackoverflow.com/questions/36579339/how-to-draw-line-with-arrow-using-d3-js
  // titles: https://stackoverflow.com/questions/16204883/d3-js-updating-title-for-svg-path
  // nice curves: https://stackoverflow.com/questions/55431818/change-d3-force-layout-link-style-to-match-d3-tree-look
  // colors: https://stackoverflow.com/questions/38391411/what-is-the-d3-js-v4-0-equivalent-for-d3-scale-category10

  export let story = {};

  const NODE_RADIUS = 7;
  const NODE_DIAMETER = NODE_RADIUS * 2;

  const starGenerator = d3
    .symbol()
    .type(d3.symbolStar)
    .size(150);
  const starPath = starGenerator();
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  let simulation;
  let svgElement;
  let maxDepth = 1;

  /**
   * Starts a story graph animation on the specificed svg and for the given data.
   *
   * @param {Object} storyData The story to render.
   * @returns {Object} Returns the simulation object (so you can stop it if you want to redraw).
   */
  const graphIt = storyData => {
    clearSvg();
    const svg = d3.select(svgElement);
    const width = Number(svgElement.getBoundingClientRect().width);
    const height = Number(svgElement.getBoundingClientRect().height);
    const constrainedRadius = min([width, height]) / 2;

    simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3
          .forceLink()
          .id(d => d.id)
          .strength(0)
      )
      .force("charge", d3.forceCollide(NODE_RADIUS * 10));

    defineArrows(svg);

    const graph = graphFrom(storyData);
    setStartPositions(graph, height, width);

    startAnimation(svg, simulation, graph, height, width);
  };

  const clearSvg = svgSelector => {
    while (svgElement.firstChild) {
      svgElement.removeChild(svgElement.firstChild);
    }
  };

  const defineArrows = svg => {
    //arrow
    svg
      .append("defs")
      .append("marker")
      .attrs({
        id: "arrowhead",
        markerHeight: 10,
        markerWidth: 15,
        orient: "auto",
        refX: 16,
        refY: 0,
        xoverflow: "visible",
        viewBox: "-0 -5 10 10"
      })
      .append("svg:path")
      .attr("d", "M 0,-5 L 10 ,0 L 0,5")
      .style("fill", "#999")
      .style("stroke", "none");
  };

  const graphFrom = storyData => {
    const toVisit = [
      {
        depth: 0,
        node: storyData.start,
        title: "start"
      }
    ];
    const visited = new Set([]);
    const nodes = {}; // name, id
    const links = []; // source, target, label
    let totalDepth = 0;

    while (toVisit.length) {
      const { title, node, depth } = toVisit.shift();

      totalDepth = Math.max(totalDepth, depth);

      // Avoid loops
      if (visited.has(title)) continue;

      visited.add(title);
      nodes[title] = {
        depth,
        final: node.final,
        id: title,
        name: title
      };

      const decisions = node.decisions || [];
      for (const decision of decisions) {
        const next = decision.storyNode;

        links.push({
          source: title,
          target: next,
          label: decision.label
        });
        toVisit.push({
          depth: totalDepth + 1,
          node: storyData[next],
          title: next
        });
      }
    }

    return {
      links,
      depth: totalDepth,
      nodes: Object.values(nodes)
    };
  };

  const setStartPositions = (graph, height, width) => {
    const levelCounts = {};
    const breadths = {};
    const xSpacer = width / (graph.depth + 1);

    for (const node of graph.nodes) {
      if (breadths[node.depth] === undefined)
        breadths[node.depth] = depthBreadth(graph, node.depth);
      const breadth = breadths[node.depth];

      if (levelCounts[node.depth] === undefined) levelCounts[node.depth] = -1;
      const levelNumber = (levelCounts[node.depth] =
        levelCounts[node.depth] + 1);

      node.fx = xSpacer * node.depth + xSpacer / 2;
      const ySpacer = height / breadth;
      node.fy = ySpacer * levelNumber + ySpacer / 2;

      if (node.id === "start") node.fixed = true;
    }
  };

  const depthBreadth = (graph, depth) => {
    let breadth = 0;
    for (const node of graph.nodes) {
      if (node.depth === depth) breadth += 1;
    }

    return breadth;
  };

  const startAnimation = (svg, simulation, graph, height, width) => {
    // First define animation functions
    const dragstarted = d => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      if (d.fixed) return;
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = d => {
      if (d.fixed) return;
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };

    const dragended = d => {
      if (!d3.event.active) simulation.alphaTarget(0);
      if (d.fixed) return;
      d.fx = null;
      d.fy = null;
    };

    // Tell the svg how we style a link
    // first, grab all  ".link" elements (they may not exist) if they do exist
    const link = svg
      .selectAll(".link")
      // next say that we want to associate some data with these elements
      .data(graph.links)
      // `enter` lets us virtually create the elements that don"t exist
      .enter()
      // put some attributes on the nice group element (which holds our line and some text)
      // note the "circular" reference here that creates things that weren"t here before
      // but later on might be grabbed by our `selectAll` and updated to match whatever we
      // define later
      // Stick a "line" element in there
      .append("line")
      .attr("class", "link")
      .attr("marker-end", "url(#arrowhead)");

    // Adding labels to lines is hard, so we use a containing "path" element
    const linkPath = svg
      .selectAll(".linkpath")
      .data(graph.links)
      .enter()
      .append("path")
      .attrs({
        class: "linkpath",
        "fill-opacity": 0,
        "stroke-opacity": 0,
        id: (d, i) => `linkpath${i}`
      })
      .style("pointer-events", "none");

    const linkLabel = svg
      .selectAll(".linklabel")
      .data(graph.links)
      .enter()
      .append("text")
      .style("pointer-events", "none")
      .attrs({
        class: "linklabel",
        id: (d, i) => `linklabel${i}`,
        "font-size": 10,
        fill: "#aaa"
      });

    linkLabel
      .append("textPath")
      // Sapper creates a `base` tag in the header, which screws up SVG refs in Firefox.
      // The fix is to use an absolute reference with the window.
      .attr("xlink:href", (d, i) => `${window.location}#linkpath${i}`)
      .style("text-anchor", "middle")
      .style("pointer-events", "none")
      .attr("startOffset", "50%")
      .text(d => {
        const label = d.label;

        if (label < 9) return label;

        return d.label.slice(0, 9) + "...";
      });

    // Tell the svg how we style a node
    const node = svg
      .selectAll(".node")
      .data(graph.nodes)
      .enter()
      // Use a group to gather the bits we need for a single node: e.g. circle and text
      .append("g")
      .attr("class", "node")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    node
      .filter(d => d.final === undefined)
      .append("circle")
      .attr("r", NODE_RADIUS)
      .style("fill", (d, i) => {
        return colors(i);
      });

    node
      .filter(d => d.final)
      .append("path")
      .style("fill", (d, i) => {
        return colors(i);
      })
      .attr("d", starPath);

    node
      .append("text")
      // Offset the text so it isn"t _in_ the circle
      .attr("dy", -10)
      .text(d => d.name);

    // Define how our SVG elements move. If you want to see it and it needs to move, you
    // need code in here. The `d` data piece is either the link or node we fed into the
    // simulation, so below you"ll see links use the source and target props and the nodes
    // use straight up coordinates.
    const ticked = () => {
      // Move the links around based on their pointy ends
      link.attrs({
        x1: d => d.source.x,
        y1: d => d.source.y,
        x2: d => d.target.x,
        y2: d => d.target.y
      });

      // Nodes get a nice translate motion
      node.attr("transform", d => {
        if (d.fixed) return `translate(${d.fx}, ${d.fy})`;

        let x = d.x;
        if (x > width) x = width - NODE_DIAMETER;
        if (x < 0) x = 0 + NODE_DIAMETER;

        let y = d.y;
        if (y > height) y = height - NODE_DIAMETER;
        if (y < 0) y = 0 + NODE_DIAMETER;

        return `translate(${x}, ${y})`;
      });

      // Adjust the linkPath position and box size so we can work on the text label within that
      linkPath.attr(
        "d",
        d => `M ${d.source.x} ${d.source.y} L ${d.target.x} ${d.target.y}`
      );

      // Now rotate that label!
      // Use a function, because `this`
      linkLabel.attr("transform", function(d) {
        if (d.target.x < d.source.x) {
          const bbox = this.getBBox();
          const rx = bbox.x + bbox.width / 2;
          const ry = bbox.y + bbox.height / 2;
          return `rotate(180 ${rx} ${ry})`;
        } else {
          return "rotate(0)";
        }
      });
    };
    // Add nodes to our simulation
    simulation.nodes(graph.nodes).on("tick", ticked);

    // Add the links to our simulation
    simulation.force("link").links(graph.links);
  };

  $: {
    if (simulation !== undefined) simulation.stop();
    if (story && svgElement) simulation = graphIt(story);
  }
</script>

<style>
  .story-graph {
    width: 100%;
    height: 100%;
  }
</style>

<svg bind:this="{svgElement}" class="story-graph"></svg>
