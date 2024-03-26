// import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

interface Activities {
  title: string;
  startDate: string;
  endDate: string;
  repetition: number;
  targetAudience: string;
  Organizer: string;
}

export const ListComponent = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => {
        return response.json();
      })
      .then((activities) => {
        setActivities(activities);
      });
  }, []);
  return (
    <Card className=" w-full max-w-7xl rounded-md border border-gray-300 mt-2 shadow-lg">
      <Table>
        <TableCaption>
          Feu clic en una activitat per veure les seves dades.
        </TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead >Títol</TableHead>
            <TableHead>Data inici</TableHead>
            <TableHead>Data fi</TableHead>
            <TableHead>Repetició</TableHead>
            <TableHead>Públic objectiu</TableHead>
            <TableHead className="text-right">Organitzador</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {activities.map((art: Activities, index: number) => {
            return (
              <TableRow  key={index} >
                <TableCell >{art.title}</TableCell>
                <TableCell>{art.startDate}</TableCell>
                <TableCell>{art.endDate}</TableCell>
                <TableCell>{art.repetition}</TableCell>
                <TableCell>{art.targetAudience}</TableCell>
                <TableCell className="text-right">{art.Organizer}</TableCell>
              </TableRow>
            );
          })}
          
        </TableBody>
      </Table>
    </Card>
  );
};