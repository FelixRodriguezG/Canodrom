import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { DataProps } from "./ListComponent";

interface PieData {
  Homes: number | undefined;
  Dones: number | undefined;
  NoBinaries: number | undefined;
  NoResponde: number | undefined;
}

const CakeChart = ({ data, className }: DataProps) => {
  const chartRef = useRef(null);
  const [pieData, setPieData] = useState<PieData>({
    Homes: 0,
    Dones: 0,
    NoBinaries: 0,
    NoResponde: 0,
  });

  useEffect(() => {
    if (data) {
      setPieData({
        Homes: data.maleAttendees || 0,
        Dones: data.femaleAttendees || 0,
        NoBinaries: data.nonBinaryAttendees || 0,
        NoResponde: data.undisclosedAttendees || 0,
      });
    }

    const myChart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        right: "1%",
        bottom: "16px",
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
              value: pieData.Homes,
              name: "Homes",
              itemStyle: { color: "#FF9F40" },
            },
            {
              value: pieData.Dones,
              name: "Dones",
              itemStyle: { color: "#FFCD56" },
            },
            {
              value: pieData.NoBinaries,
              name: "No binaris",
              itemStyle: { color: "#FFB1C1" },
            },
            {
              value: pieData.NoResponde,
              name: "No responde",
              itemStyle: { color: "#c8ffb1" },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className={className} />;
};

export default CakeChart;