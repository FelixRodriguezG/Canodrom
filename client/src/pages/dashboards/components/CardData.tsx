import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Activity } from "./Api";


interface CardItem {
  id: number;
  title: string;
  value: number | string;
}

interface CardDataProps {
  data: Activity;
}

function CardData({ data }: CardDataProps) {
  const [cardData, setCardData] = useState<CardItem[]>([]);

  useEffect(() => {
    if (data){
      console.log(data.title)
    setCardData([
      {
        id: 1,
        title: data.title,
        value: data.attendees,
      },
      {
        id: 2,
        title: "Temàtica",
        value: data.theme,
      },
      {
        id: 3,
        title: "Programa",
        value: data.program,
      },
      {
        id: 4,
        title: "Tipus d'activitat",
        value: data.type ,
      },
    ]);
  }
  }, [data]);

  return (
    <div className="w-[800px] max-w-[800px]  grid grid-cols-2 gap-8 pt-8 mb-8 ">
      {cardData.map((card) => (
        <div key={card.id}>
          <Card className="h-[150px] max-w-[500px] shadow-lg rounded-md border border-gray-300">
            <CardHeader>
              <CardTitle className="font-bold  text-xl ">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-center text-xl">{card.value}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardData;
