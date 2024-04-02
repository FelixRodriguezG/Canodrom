
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

interface EventData {
  Twitter: number | undefined;
  Facebook: number | undefined;
  Instagram: number | undefined;
  Mastodon: number | undefined;
  Newsletter: number | undefined;
  Web: number | undefined;
  Signs: number | undefined;
  Other: number | undefined;
}

const CollumsGraph = ({ data, className }: DataProps) => {
  const [collumData, setCollumData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setCollumData([
        {
          Twitter: data.heardThroughTwitter || 0,
          Facebook: data.heardThroughFacebook || 0,
          Instagram: data.heardThroughInstagram || 0,
          Mastodon: data.heardThroughMastodon || 0,
          Newsletter: data.heardThroughNewsletter || 0,
          Web: data.heardThroughWeb || 0,
          Signs: data.heardThroughSigns || 0,
          Other: data.heardThroughOther || 0,
        },
      ]);
      setLoading(false);
    } else {
      setCollumData([
        {
          Twitter: 0,
          Facebook: 0,
          Instagram: 0,
          Mastodon: 0,
          Newsletter: 0,
          Web: 0,
          Signs: 0,
          Other: 0,
        },
      ]);
      setLoading(false);
    }
  }, [data]);

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const option = {
    xAxis: {
      type: "category",
      data: [
        "Twitter",
        "Facebook",
        "Instagram",
        "Mastodon",
        "Newsletter",
        "Web",
        "Signs",
        "Other",
      ],
      axisLabel: {
        interval: 0,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          collumData[0].Twitter,
          collumData[0].Facebook,
          collumData[0].Instagram,
          collumData[0].Mastodon,
          collumData[0].Newsletter,
          collumData[0].Web,
          collumData[0].Signs,
          collumData[0].Other,
        ],
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
    <Card className={className}>
      <CardTitle className="text-3xl text-center ">
        Com ens vas trobar?
        <CardContent className="h-[350px] w-[90vh]">
          <ReactECharts option={option} />
        </CardContent>
      </CardTitle>
    </Card>
  );
};

export default CollumsGraph;
