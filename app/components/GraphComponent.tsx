"use client";

import React, { useEffect } from "react";
import cytoscape from "cytoscape";

const GraphComponent = () => {
  useEffect(() => {
    const cy = cytoscape({
      container: document.getElementById("cytoscape-container"),
      elements: [
        { data: { id: "a", label: "Strain A" } },
        { data: { id: "b", label: "Strain B" } },
        { data: { id: "c", label: "Strain C" } },
        { data: { source: "a", target: "b" } },
        { data: { source: "b", target: "c" } },
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "var(--primary-color)",
            "text-valign": "center",
            label: "data(label)",
            color: "white",
            "font-size": "12px",
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "var(--accent-color)",
          },
        },
      ],
      layout: {
        name: "breadthfirst",
        directed: true,
        padding: 10,
      },
    });

    return () => cy.destroy(); // Cleanup
  }, []);

  return <div id="cytoscape-container" style={{ height: "100%", width: "100%" }} />;
};

export default GraphComponent;


