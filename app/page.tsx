import React from "react";
import Sidebar from "./components/Sidebar";
import GraphComponent from "./components/GraphComponent";
import TreeComponent from "./components/TreeComponent";
import ChartComponent from "./components/ChartComponent";

const HomePage = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20% 60% 20%",
        gridTemplateRows: "70% 30%",
        gridTemplateAreas: `
          "sidebar graph graph"
          "sidebar tree stats"
        `,
        gap: "10px",
        height: "100vh",
        padding: "10px",
        background: "#f8f9fa",
      }}
    >
      <div style={{ gridArea: "sidebar", background: "#f4f4f4", padding: "1rem", borderRadius: "5px" }}>
        <Sidebar />
      </div>

      <div style={{ gridArea: "graph", background: "#ffffff", borderRadius: "5px", overflow: "hidden" }}>
        <GraphComponent />
      </div>

      <div style={{ gridArea: "tree", background: "#ffffff", padding: "1rem", borderRadius: "5px" }}>
        <TreeComponent />
      </div>

      <div style={{ gridArea: "stats", background: "#ffffff", padding: "1rem", borderRadius: "5px" }}>
        <ChartComponent />
      </div>
    </div>
  );
};

export default HomePage;




