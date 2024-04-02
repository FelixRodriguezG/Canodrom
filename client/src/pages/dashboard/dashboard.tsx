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
  const styleCakeChart =
    "h-[331px] shadow-lg w-full max-w-sm  rounded-md border border-gray-300";
  const styleCollumsGraph =
    "flex justify-center p-4 h-[331px] w-[100vh] max-w-4xl rounded-md shadow-lg border border-gray-300";
  return (
  <div>
    <Header/>
    <main className="flex flex-col  min-h-[800px] "> 
      <div className="flex justify-center pt-10 items-start max-xl:flex-col gap-14 mx-7">
        <CakeChart className={styleCakeChart} data={selectedActivity} />
        <CollumsGraph className={styleCollumsGraph} data={selectedActivity} />
      </div>
      <div className="w-full px-10 py-10 items-center max-2xl:flex-col-reverse gap-2 max-2xl:items-center  ">
        <DataTablePage onRowClick={handleActivitySelected} />
      </div>
    </main>
    </div>
  );
};

export default Dashboard;
