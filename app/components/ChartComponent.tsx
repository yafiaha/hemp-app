"use client";

import React, { useRef, useEffect } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend, BarController } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend, BarController);

const ChartComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    new Chart(ctx, {
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

  return <canvas ref={canvasRef} style={{ width: "100%", height: "300px" }} />;
};

export default ChartComponent;



