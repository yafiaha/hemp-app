"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Sidebar_1 = __importDefault(require("./components/Sidebar"));
const GraphComponent_1 = __importDefault(require("./components/GraphComponent"));
const TreeComponent_1 = __importDefault(require("./components/TreeComponent"));
const ChartComponent_1 = __importDefault(require("./components/ChartComponent"));
const HomePage = () => {
    return (<div style={{
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
        }}>
      <div style={{ gridArea: "sidebar", background: "#f4f4f4", padding: "1rem", borderRadius: "5px" }}>
        <Sidebar_1.default />
      </div>

      <div style={{ gridArea: "graph", background: "#ffffff", borderRadius: "5px", overflow: "hidden" }}>
        <GraphComponent_1.default />
      </div>

      <div style={{ gridArea: "tree", background: "#ffffff", padding: "1rem", borderRadius: "5px" }}>
        <TreeComponent_1.default />
      </div>

      <div style={{ gridArea: "stats", background: "#ffffff", padding: "1rem", borderRadius: "5px" }}>
        <ChartComponent_1.default />
      </div>
    </div>);
};
exports.default = HomePage;
