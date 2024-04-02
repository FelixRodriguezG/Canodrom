import CollumsGraph from "./CollumsGraph";
import CakeChart from "./CakeGraph";
import { Activity } from "./Api";
import { useState } from "react";
import DataTablePage from "./dataTablePage";
import { Header } from "@/components/Header";
const Dashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const handleActivitySelected = (activity: Activity) => {
    setSelectedActivity(activity);
  };
  const className1 =
    "h-[334px] shadow-lg w-[250px] max-w-sm  rounded-md border border-slate-300";
  const className2 =
    "h-[334px] shadow-lg w-[250px] max-w-sm  rounded-md border border-slate-300";
  const className3 =
    "h-[334px] shadow-lg w-[250px] max-w-sm  rounded-md border border-slate-300";
  const styleCollumsGraph =
    "flex justify-center p-4 h-[331px] w-[100vh] max-w-2xl rounded-md shadow-lg border border-gray-300";
  return (
    <div>
   <Header/> 
    <main className="flex flex-col min-h-[800px] mx-auto py-10 sm:px-0">
      <div className="flex flex-col justify-between items-center  gap-3 mx-10">
        <div className="flex justify-around  gap-6 items-center">
          <CakeChart
            title="Tipus d'activitat"
            className={className1}
            data={selectedActivity}
          />
          <CakeChart
            title="Temàtica"
            className={className2}
            data={selectedActivity}
          />
          <CakeChart
            title="Asistencia"
            className={className3}
            data={selectedActivity}
          />
          <CollumsGraph className={styleCollumsGraph} data={selectedActivity} />
        </div>
        <div>
          <DataTablePage onRowClick={handleActivitySelected} />
          <div className="flex justify-center gap-6">
            <CakeChart
              title="Asistencia"
              className={className3}
              data={selectedActivity}
            />
            <CollumsGraph
              className={styleCollumsGraph}
              data={selectedActivity}
            />
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};
export default Dashboard;




















