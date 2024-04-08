import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { DataProps, EventsList } from "./interfaces/interfaces";

interface PieData {
  Homes: number;
  Dones: number;
  NoBinaries: number;
  NoResponde: number;
  [key: string]: number;
}

const CakeChart3 = ({ themes, title }: DataProps) => {
  
  console.log("themes",themes)
 
  const chartRef = useRef(null);
  const [sourceData, setSourceData] = useState(themes);
  const [prevData, setPrevData] = useState(themes);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (themes !== prevData) {
      setSourceData(themes as EventsList);
      setPrevData(themes);
    } else if (themes) {
      setSourceData(themes);
    }
  }, [themes]);

  useEffect(() => {
    if (sourceData && chartRef.current) {
      const pieDataArray: { name: string; value: number; }[] = Object.entries(sourceData).map(([key, value]) => ({
        name: key,
        value: value,
      }));
  
      
  

      const myChart = echarts.init(chartRef.current);

      const option = {
        title: {
          text: title,
          left: "center",
          top: 20,
          textStyle: {
            color: "#000",
          },
        },
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
            name: title,
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
            data: pieDataArray.map((data) => ({
              value: data.value,
              name: data.name,
            })),
          },
        ],
      };

      myChart.setOption(option);
      return () => {
        myChart.dispose();
      };
    }
    console.log(sourceData)
    setLoading(false);
  }, [sourceData]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      ref={chartRef}
      className="h-[334px] shadow-lg w-[250px] max-w-sm  rounded-md border border-slate-300"
    />
  );
};

export default CakeChart3;
