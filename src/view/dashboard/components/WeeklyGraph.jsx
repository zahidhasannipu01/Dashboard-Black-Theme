import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

// Custom plugin to render labels
const labelPlugin = {
  id: "labelPlugin",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    const { datasets } = chart.data;

    datasets[0].data.forEach((value, index) => {
      const meta = chart.getDatasetMeta(0);
      const point = meta.data[index];
      const { x, y } = point.tooltipPosition();

      // Box properties
      const boxWidth = 40;
      const boxHeight = 20;
      const boxX = x - boxWidth / 2;
      const boxY = y - 30;

      // Draw box
      ctx.fillStyle = "white";

      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
      ctx.strokeStyle = "black";
      ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 3;
      // Add text
      ctx.fillStyle = "black";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`${value}h`, x, boxY + boxHeight / 1.5);
    });
  },
};

const WeeklyGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
      },
      point: {
        radius: 6,
        backgroundColor: "black",
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: { stepSize: 1 },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
    },
  };

  const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const data = {
    labels,
    datasets: [
      {
        data: [0, 1.5, 2.5, 1, 4, 3, 2],
        borderColor: "black",
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        backgroundColor: "black",
      },
    ],
  };

  return (
    <div className="mt-10 w-full h-[400px]">
      <div className="py-5">
        <p className="text-3xl font-sans">Your statistics</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-4 py-3">
          <div className="text-xl font-sans">
            <p>Learning Hours</p>
          </div>
          <div className="text-xl font-sans text-gray-400">
            <p>My Courses</p>
          </div>
        </div>
        <div>
          <select
            name=""
            id=""
            className="p-2 bg-[#F5F5F7] rounded-xl focus:outline-none"
          >
            <option value="Weekly">Weekly</option>
          </select>
        </div>
      </div>
      <div className="pt-10 h-[300px]">
        <Line options={options} data={data} plugins={[labelPlugin]} />
      </div>
    </div>
  );
};

export default WeeklyGraph;
