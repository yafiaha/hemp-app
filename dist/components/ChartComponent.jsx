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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const chart_js_1 = require("chart.js");
chart_js_1.Chart.register(chart_js_1.BarElement, chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.Tooltip, chart_js_1.Title, chart_js_1.Legend, chart_js_1.BarController);
const ChartComponent = () => {
    const canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!canvasRef.current)
            return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx)
            return;
        new chart_js_1.Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Strain A", "Strain B", "Strain C", "Strain D"],
                datasets: [
                    {
                        label: "THC Level",
                        data: [20, 15, 25, 10],
                        backgroundColor: "#3498db",
                    },
                    {
                        label: "CBD Level",
                        data: [10, 20, 5, 15],
                        backgroundColor: "#2ecc71",
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            },
        });
    }, []);
    return <canvas ref={canvasRef} style={{ width: "100%", height: "300px" }}/>;
};
exports.default = ChartComponent;
