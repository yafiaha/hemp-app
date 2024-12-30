"use client";

import React, { useEffect, useRef } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title, BarController } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title, BarController);

const ChartComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return; // Ensure the ref is set

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return; // Ensure the context is available

    const chart = new Chart(ctx, {
      type: "bar", // Specify the type of chart
      data: {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            label: "Data",
            data: [12, 19, 3, 5],
            backgroundColor: ["#0074d9", "#2ecc40", "#ffdc00", "#ff4136"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => {
      chart.destroy(); // Clean up the chart instance on unmount
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "300px" }} />;
};

export default ChartComponent;


