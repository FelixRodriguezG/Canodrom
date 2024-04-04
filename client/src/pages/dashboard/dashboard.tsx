import { useState, useEffect } from "react";
import DataTablePage from "./dataTablePage";
import { Header } from "@/components/Header";
import CakeChart from "./CakeGraph";
import CollumsGraph from "./CollumsGraph";
import { Activity, fetchActivities } from "./Api";

const Dashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [activities, setActivities] = useState<Activity[]>([]);

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

  const handleActivitySelected = (activity: Activity) => {
    setSelectedActivity(activity);
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
            <CollumsGraph data={selectedActivity} />
          </div>
          <div>
            <DataTablePage onRowClick={handleActivitySelected} />
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
