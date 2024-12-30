"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const cytoscape_1 = __importDefault(require("cytoscape"));
const GraphComponent = () => {
    (0, react_1.useEffect)(() => {
        const cy = (0, cytoscape_1.default)({
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
    return <div id="cytoscape-container" style={{ height: "100%", width: "100%" }}/>;
};
exports.default = GraphComponent;
