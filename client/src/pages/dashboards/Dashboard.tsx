import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";
import { Activity } from "./components/Api";
import { useState } from "react";

 



const Dashboard = () => {
  const [selectedActivity1, setSelectedActivity] = useState<Activity | null>(null);

  const handleActivitySelected = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  return (
    <main className="flex flex-col  min-h-[1080px] ">
      <div className="flex justify-between items-center max-2xl:flex-col gap-3 mx-7">
        {selectedActivity1 && <CardData data={selectedActivity1} />}
        <CollumsGraph />
      </div>
      <div className="flex justify-between max-2xl:flex-col gap-2 max-2xl:items-center mx-7 ">
        <ListComponent onActivitySelected={handleActivitySelected} />
        <CakeChart />
      </div>
    </main>
  );
};
export default Dashboard
