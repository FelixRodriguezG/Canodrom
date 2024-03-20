import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactECharts from "echarts-for-react";

const CollumsGraph = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Instagram", "Telegram", "Twitter", "Cartelleria", "Mastodont"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [60, 30, 25, 15, 12],
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
    <section className="flex justify-b w-[500px] h-[400px] pt-36 ">
      <Card className="flex justify-center h-[285px] w-[1100px] max-w-4xl">
        <CardTitle>
          <CardContent className="w-[1100px]">
            <ReactECharts option={option} />
          </CardContent>
        </CardTitle>
      </Card>
    </section>
  );
};

export default CollumsGraph;
