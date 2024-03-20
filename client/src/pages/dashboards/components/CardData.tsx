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
    // Realizar la solicitud a la base de datos utilizando fetch
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
    <div className="w-[500px] h-[400px] grid grid-cols-2 gap-6 pt-36 pl-9">
      {cardData.map((card) => (
        <div key={card.id}>
          <Card className="w-[100%] h-[100%] col-span-1 rounded-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-bold  text-xl">{card.title}</CardTitle>
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
