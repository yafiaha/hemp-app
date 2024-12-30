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
        { data: { id: "d", label: "Strain D" } },
        { data: { source: "a", target: "b" } },
        { data: { source: "a", target: "c" } },
        { data: { source: "c", target: "d" } },
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#2ecc71",
            "text-valign": "center",
            "text-halign": "center",
            label: "data(label)",
            color: "#fff",
            "font-size": "10px",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#3498db",
          },
        },
      ],
      layout: {
        name: "concentric",
        padding: 10,
      },
    });

    return () => cy.destroy(); // Cleanup on unmount
  }, []);

  return <div id="cytoscape-container" style={{ height: "100%", width: "100%" }} />;
};

export default GraphComponent;

