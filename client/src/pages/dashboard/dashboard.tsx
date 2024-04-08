import { useState, useEffect } from "react";
import DataTablePage from "./dataTablePage";
import { Header } from "@/components/Header";
import CakeChart from "./CakeGraph";
import CollumsGraph from "./CollumsGraph";
import { fetchActivities } from "../../api/Api";
import { EventsList } from "./interfaces/interfaces";
import CakeChart3 from "./CakeGraph3";
import CakeChart2 from "./CakeGraph2";

const Dashboard = () => {
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
  };
  
  const [selectedActivity, setSelectedActivity] = useState<EventsList>(initialTotals);
  const [_activities, setActivities] = useState<EventsList[]>([]);
  const [totals, setTotals] = useState<EventsList>(initialTotals);
  const [typeCounts, setTypeCounts] = useState<{ [key: string]: number }>({});
  const [themeCounts, setThemeCounts] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedActivities = await fetchActivities();
        setActivities(fetchedActivities);
        setSelectedActivity(fetchedActivities[0]);
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
  };
  const handleTypeCountsChange = (newTypeCounts: any) => {
    setTypeCounts(newTypeCounts);
  }
  const handleThemeCountsChange = (newThemeCounts: any) => {
    setThemeCounts(newThemeCounts);
  }

  return (
    <div>
      <Header />
      <main className="flex flex-col min-h-[800px] mx-auto py-10 sm:px-0">
        <div className="flex flex-col justify-between items-center  gap-3 mx-10">
          <div className="flex justify-around  gap-6 items-center">
            <CakeChart3 data={themeCounts} title="Temàtica"  themes={themeCounts}/>
            <CakeChart2 title="Tipus d'activitat" data={typeCounts} types={typeCounts}themes={themeCounts}/>
            <CakeChart title="Assistencia'" data={selectedActivity} totals={totals} types={typeCounts} themes={themeCounts}/>
            <CollumsGraph data={selectedActivity} totals={totals}/>
          </div>
          <div>
            <DataTablePage
              onRowClick={handleActivitySelected}
              onTotalschange={handleTotalsChange}
              initialTotals={initialTotals}
              onTypeCountsChange={handleTypeCountsChange}
              onThemeCountsChange={handleThemeCountsChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
