import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface CardItem {
  id: number;
  title: string;
  value: string;
}

function CardData() {
  const [data, setData] = useState<any>(null);
  const [cardData, setCardData] = useState<CardItem[]>([]);

  useEffect(() => {
    // Realizar la solicitud a la base de datos utilizando fetch
    fetch("http://localhost:3000/events/?limit=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ocurrió un error al realizar la solicitud.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log("Success:", data);
        // Asignar los datos a la constante cardData
        setCardData([
          {
            id: 1,
            title: data[0].title,

            value: "50",
          },
          {
            id: 2,
            title: "Temàtica",
            value: "Tecnologies Obertes",
          },
          {
            id: 3,
            title: "Programa",
            value: "Creixent entre pantalles",
          },
          {
            id: 4,
            title: "Tipus d'activitat",
            value: "Trobada",
          },
        ]);
        console.log("Success:", data);
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
