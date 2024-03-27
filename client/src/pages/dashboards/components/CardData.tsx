import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Activity } from "./Api";

interface CardItem {
  id: number;
  title: string;
  value: number | string;
}

interface CardDataProps {
  data: Activity | null;
}

function CardData({ data }: CardDataProps) {
  const [cardData, setCardData] = useState<CardItem[]>([
    {
      id: 1,
      title: "Titol de l'activitat",
      value: "Fes click a la llista per veure les dades",
    },
    {
      id: 2,
      title: "Tematica",
      value: "Fes click a la llista per veure les dades",
    },
    {
      id: 3,
      title: "Programa",
      value: "Fes click a la llista per veure les dades",
    },
    {
      id: 4,
      title: "Tipus d'activitat",
      value: "Fes click a la llista per veure les dades",
    },
  ]);

  useEffect(() => {
    if (data) {
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
              <CardTitle className="font-bold  text-lg ">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-center text-lg">{card.value}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardData;