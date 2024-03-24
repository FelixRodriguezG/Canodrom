import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

interface EventData {
  title: string;
  startDate: Date;
  endDate: Date;
  program: string;
  repetition: number;
  attendees: number;
  theme: string;
  type: string;
  targetAudience: string;
  Organizer: string;
  femaleAttendees?: number;
  maleAttendees?: number;
  nonBinaryAttendees?: number;
  undisclosedAttendees?: number;
  heardThroughTwitter?: number;
  heardThroughFacebook?: number;
  heardThroughInstagram?: number;
  heardThroughMastodon?: number;
  heardThroughNewsletter?: number;
  heardThroughWeb?: number;
  heardThroughSigns?: number;
  heardThroughOther?: number;
}

const CollumsGraph = () => {
  const [data, setDataB] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/events/?limit=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in obtaining data");
        }
        return response.json();
      })
      .then((datas) => {
        setDataB(datas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
          data[0]?.heardThroughTwitter,
          data[0]?.heardThroughFacebook,
          data[0]?.heardThroughInstagram,
          data[0]?.heardThroughMastodon,
          data[0]?.heardThroughNewsletter,
          data[0]?.heardThroughWeb,
          data[0]?.heardThroughSigns,
          data[0]?.heardThroughOther,
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
    <Card className="flex justify-center  h-[330px] w-[100vh] max-w-4xl rounded-md shadow-lg border border-gray-300">
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
