import React, { useState, useEffect } from "react";
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
import { fetchActivities, Activity } from "./Api";
import CardData from "./CardData";

interface CardDataProps {
  data: Activity;
}

export const ListComponent = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchActivities();
      setActivities(data);
    };

    fetchData();
  }, []);

  return (
    <Card className="w-full max-w-7xl rounded-md border border-gray-300 mt-2">
      <Table>
        <TableCaption>
          Feu clic en una activitat per veure les seves dades.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Títol</TableHead>
            <TableHead>Data inici</TableHead>
            <TableHead>Data fi</TableHead>
            <TableHead>Repetició</TableHead>
            <TableHead>Públic objectiu</TableHead>
            <TableHead className="text-right">Organitzador</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity: Activity, index: number) => {
            return (
              <TableRow
                key={index}
                onClick={() => setSelectedActivity(activity)}
              >
                <TableCell>{activity.title}</TableCell>
                <TableCell>{activity.startDate}</TableCell>
                <TableCell>{activity.endDate}</TableCell>
                <TableCell>{activity.repetition}</TableCell>
                <TableCell>{activity.targetAudience}</TableCell>
                <TableCell className="text-right">
                  {activity.Organizer}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {selectedActivity && <CardData data={selectedActivity} />}
    </Card>
  );
};
