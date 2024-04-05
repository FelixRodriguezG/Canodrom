import { useState, useEffect } from "react";
import DataTablePage from "./dataTablePage";
import { Header } from "@/components/Header";
import CakeChart from "./CakeGraph";
import CollumsGraph from "./CollumsGraph";
import { fetchActivities } from "./Api";
import { EventsList } from "./interfaces/interfaces";

const Dashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState<EventsList | null>(
    null
  );
  const initialTotals: EventsList = {
    attendees: 0,
    femaleAttendees: 0,
    maleAttendees: 0,
    nonBinaryAttendees: 0,
    undisclosedAttendees: 0,
    heardThroughTwitter: 0,
    heardThroughFacebook: 0,
    heardThroughInstagram: 0,
    heardThroughMastodon: 0,
    heardThroughNewsletter: 0,
    heardThroughWeb: 0,
    heardThroughSigns: 0,
    heardThroughOther: 0,
  }

  const [activities, setActivities] = useState<EventsList[]>([]);
  const [totals, setTotals] = useState<EventsList>(
    initialTotals
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedActivities = await fetchActivities();
        setActivities(fetchedActivities);
        setSelectedActivity(fetchedActivities[0] || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleActivitySelected = (activity: EventsList) => {
    setSelectedActivity(activity);
  };
  const handleTotalsChange = (newTotals: EventsList) => {
    setTotals(newTotals);
    console.log("New Totals:", totals)
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col min-h-[800px] mx-auto py-10 sm:px-0">
        <div className="flex flex-col justify-between items-center  gap-3 mx-10">
          <div className="flex justify-around  gap-6 items-center">
            <CakeChart title="Tipus d'activitat" data={selectedActivity} />
            <CakeChart title="Temàtica" data={selectedActivity} />
            <CakeChart title="Asistencia" data={selectedActivity} />
            <CollumsGraph 
            data={selectedActivity}
            totals={totals} />
          </div>
          <div>
            <DataTablePage onRowClick={handleActivitySelected} onTotalschange={handleTotalsChange} initialTotals={initialTotals}/>
            <div className="flex justify-center gap-6">
              <CakeChart
                title="Asistencia"
                data={selectedActivity || activities[0]} 
              />
              <CollumsGraph
                title="Inscripcions"
                data={selectedActivity || activities[0]} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
