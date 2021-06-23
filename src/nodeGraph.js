import React from "react";
import Graph from "react-graph-vis";

// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";

function NodeGraph() {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 5 },
      { from: 1, to: 5 },
      { from: 5, to: 1 },
    ],
  };

  var options = {
    nodes: {
      shape: "dot",
      size: 16,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: { iterations: 150 },
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } =
      event;
    },
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}

export default NodeGraph;
