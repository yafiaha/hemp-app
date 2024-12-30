
"use client"; 
import React, { useEffect } from "react";
import cytoscape from "cytoscape";

const GraphComponent = () => {
  useEffect(() => {
    const cy = cytoscape({
      container: document.getElementById("cytoscape-container"),
      elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: { id: "c" } },
        { data: { id: "d" } },
        { data: { id: "e" } },
        { data: { id: "f" } },
        // Relationships
        { data: { source: "a", target: "b" } },
        { data: { source: "a", target: "c" } },
        { data: { source: "c", target: "d" } },
        { data: { source: "d", target: "e" } },
        { data: { source: "e", target: "f" } },
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#0074d9",
            label: "data(id)",
            "text-valign": "center",
            color: "#fff",
          },
        },
        {
          selector: "edge",
          style: {
            "width": 2,
            "line-color": "#ddd",
          },
        },
      ],
      layout: {
        name: "grid",
      },
    });

    return () => cy.destroy(); // Cleanup on unmount
  }, []);

  return <div id="cytoscape-container" style={{ height: "100%" }}></div>;
};

export default GraphComponent;
