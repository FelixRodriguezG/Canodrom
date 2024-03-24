import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const CakeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/events/?limit=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in obtaining data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const myChart = echarts.init(chartRef.current);

        const option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "horizontal",
            right: "15%",
            bottom: "20px",
          },
          series: [
            {
              name: "Gènere",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 24,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                {
                  value: data[0].attendees,
                  name: "Homes",
                  itemStyle: { color: "#FF9F40" },
                }, // Cambiar el color a rojo
                { value: 40, name: "Dones", itemStyle: { color: "#FFCD56" } }, // Cambiar el color a azul
                { value: 20, name: "No binaris", itemStyle: { color: "#FFB1C1" } }, // Cambiar el color a amarillo
                { value: 20, name: "No responde", itemStyle: { color: "#c8ffb1" } },
              ],
            },
          ],
        };

        myChart.setOption(option);

        
        return () => {
          myChart.dispose();
        };
      });
  }, []);

  return (
    <div
      ref={chartRef}
      className=" h-[500px] shadow-lg w-full max-w-md rounded-md border border-gray-300 "
    />
  );
};

export default CakeChart;