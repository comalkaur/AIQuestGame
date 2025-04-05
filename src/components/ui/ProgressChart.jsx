import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const ProgressChart = ({ progress }) => {
  const chartData = {
    labels: progress.map((_, index) => `Q${index + 1}`),
    datasets: [
      {
        label: "Score Progress",
        data: progress,
        fill: false,
        borderColor: "#4CAF50",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="mt-6 w-full max-w-lg bg-white p-4 rounded-2xl shadow-xl">
      <h3 className="text-lg font-bold text-gray-800 text-center mb-3">Score Progress</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ProgressChart;
