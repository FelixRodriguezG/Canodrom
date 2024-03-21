import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const CollumsGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events/?limit=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in obtaining data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const option = {
    xAxis: {
      type: "category",
      data: ["IG", "Tel", "X", "Cart", "Mast", "New Canòd", "Web Canòd", "Cartel", "Altres"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [60, 30, 25, 15, 12, 23, 45, 12, 23],
        type: "bar",
        color: "rgba(255, 177, 193, 1)",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  return (
   
      <Card className="flex justify-center mt-8 h-[330px] w-[1100px] max-w-4xl">
        <CardTitle>
          <h1 className="text-3xl text-center">Com ens vas trobar</h1>
          <CardContent className="h-[350px] w-[1100px]">
            <ReactECharts option={option} />
          </CardContent>
        </CardTitle>
      </Card>
    
  );
};

export default CollumsGraph;
