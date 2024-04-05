import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { DataProps } from "./interfaces/interfaces";

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

const CollumsGraph = ({ data, totals }: DataProps) => {
  const [collumData, setCollumData] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  
  console.log("Data:", totals)
  useEffect(() => {
    let sourceData = data;
    if (!data && totals) {
      sourceData = totals;
    }
    if (sourceData) {
      console.log("ENTRA?",sourceData)
      setCollumData([
        {
          Twitter: sourceData.heardThroughTwitter ,
          Facebook: sourceData.heardThroughFacebook ,
          Instagram: sourceData.heardThroughInstagram,
          Mastodon: sourceData.heardThroughMastodon ,
          Newsletter: sourceData.heardThroughNewsletter,
          Web: sourceData.heardThroughWeb ,
          Signs: sourceData.heardThroughSigns,
          Other: sourceData.heardThroughOther,
        },
      ]);
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
  }
  setLoading(false);
  console.log("dafjksdlñfjalksdñjflkañ",totals)
}, [data, totals]);


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
    <Card className="xl:w-[50vw] min-w-[600px] w-full h-[338px]">
      <CardTitle className="text-2xl text-center ">
        Com ens vas trobar?
      </CardTitle>
      <CardContent>
        <ReactECharts option={option} />
      </CardContent>
    </Card>
  );
};

export default CollumsGraph;
