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
      }}
    >
      <div style={{ gridArea: "sidebar", background: "#f4f4f4", padding: "1rem", borderRadius: "5px" }}>
        <Sidebar />
      </div>

      <div style={{ gridArea: "graph", background: "#fff", borderRadius: "5px" }}>
        <GraphComponent />
      </div>

      <div style={{ gridArea: "tree", background: "#fff", padding: "1rem", borderRadius: "5px" }}>
        <TreeComponent />
      </div>

      <div style={{ gridArea: "stats", background: "#fff", padding: "1rem", borderRadius: "5px" }}>
        <ChartComponent />
      </div>
    </div>
  );
};

export default HomePage;



