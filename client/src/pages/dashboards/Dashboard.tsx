import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";
import { Activity } from "./components/Api";
import { useState } from "react";
import { Header } from "@/components/Header";

const Dashboard = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const handleActivitySelected = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  return (
    <>
    <Header/>
    <main className="flex flex-col  min-h-[800px] ">
      <div className="flex justify-between items-center max-2xl:flex-col gap-3 mx-7">
         <CardData data={selectedActivity} />
         <CollumsGraph data={selectedActivity} />
      </div>
      <div className="flex justify-between max-2xl:flex-col-reverse gap-2 max-2xl:items-center mx-7 ">
        <ListComponent onActivitySelected={handleActivitySelected} />
        <CakeChart data={selectedActivity} />
      </div>
    </main>
    </>
  );
};
export default Dashboard
