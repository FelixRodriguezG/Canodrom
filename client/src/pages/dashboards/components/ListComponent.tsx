import { useState, useEffect } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area"

export interface DataProps {
  data: Activity | null;
}

interface ListComponentProps {
  onActivitySelected: (activity: Activity) => void;
}

export const ListComponent = ({ onActivitySelected }: ListComponentProps) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [_dataSelect, setDataSelect] = useState<Activity | null>(null);
  const [sortByDateAsc, setSortByDateAsc] = useState<boolean>(true);
  const [sortByRepetitionAsc, setSortByRepetitionAsc] = useState<boolean>(true); 
  const [sortByAttendeesAsc, setSortByAttendeesAsc] = useState<boolean>(true); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchActivities();
      setActivities(data);
    };

    fetchData();
  }, []);

  const handleSortByStartDate = () => {
    const sortedActivities = [...activities];
    sortedActivities.sort((a, b) => {
      if (sortByDateAsc) {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      } else {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      }
    });
    setActivities(sortedActivities);
    setSortByDateAsc(!sortByDateAsc); 
  };

  const handleSortByRepetition = () => {
    const sortedActivities = [...activities];
    sortedActivities.sort((a, b) => {
      if (sortByRepetitionAsc) {
        return a.repetition - b.repetition;
      } else {
        return b.repetition - a.repetition;
      }
    });
    setActivities(sortedActivities);
    setSortByRepetitionAsc(!sortByRepetitionAsc); 
  };

  const handleSortByAttendees = () => {
    const sortedActivities = [...activities];
    sortedActivities.sort((a, b) => {
      if (sortByAttendeesAsc) {
        return a.attendees - b.attendees;
      } else {
        return b.attendees - a.attendees;
      }
    });
    setActivities(sortedActivities);
    setSortByAttendeesAsc(!sortByAttendeesAsc); 
  };

  return (
    <Card className="w-full max-w-7xl rounded-md border border-gray-300 mt-2">
      <ScrollArea className="h-[500px] rounded-md border p-4">
        <Table>
          <TableCaption>
            Feu clic en una activitat per veure les seves dades.
          </TableCaption>
          <TableHeader>
            <TableRow className="cursor-pointer hover:bg-transparent">
              <TableHead onClick={handleSortByStartDate}>Títol</TableHead>
              <TableHead onClick={handleSortByStartDate}>Data inici</TableHead>
              <TableHead onClick={handleSortByStartDate}>Data fi</TableHead>
              <TableHead onClick={handleSortByRepetition}>Repetició</TableHead>
              <TableHead onClick={handleSortByAttendees}>Assistents</TableHead>
              <TableHead className="text-right">Organitzador</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity: Activity, index: number) => {
              return (
                <TableRow
                  className="cursor-pointer hover:bg-[#46FCD6]"
                  key={index}
                  onClick={() => {
                    setDataSelect(activity);
                    onActivitySelected(activity);
                  }}
                >
                  <TableCell>{activity.title}</TableCell>
                  <TableCell>{activity.startDate}</TableCell>
                  <TableCell>{activity.endDate}</TableCell>
                  <TableCell>{activity.repetition}</TableCell>
                  <TableCell>{activity.attendees}</TableCell>
                  <TableCell className="text-right">
                    {activity.Organizer}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
    </Card>
  );
};
