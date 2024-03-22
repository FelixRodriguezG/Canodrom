import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface CardItem {
  id: number;
  title: string;
  value: string;
}

function CardData() {
  const [, setData] = useState<any>(null);
  const [cardData, setCardData] = useState<CardItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/events/?limit=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ocurrió un error al realizar la solicitud.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log("Success:", data);
        
        setCardData([
          {
            id: 1,
            title: data[0].title,
            
            value: data[0].attendees,
          },
          {
            id: 2,
            title: "Temàtica",
            value: data[0].theme,
          },
          {
            id: 3,
            title: "Programa",
            value: data[0].program,
          },
          {
            id: 4,
            title: "Tipus d'activitat",
            value: data[0].type ,
          },
        ]);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="w-[800px] max-w-[800px]  grid grid-cols-2 gap-8 pt-8 mb-8 ">
      {cardData.map((card) => (
        <div key={card.id}>
          <Card className="h-[150px] max-w-[500px]  shadow-lg rounded-md border border-gray-300">
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
