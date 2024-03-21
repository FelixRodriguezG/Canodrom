import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";



function Dashboard() {
  return (
    <div>
      <div  className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <div className="">
        <CardData></CardData>
        </div>
        <div className="">
        <CollumsGraph></CollumsGraph>
        </div>
        <div className="">
        <ListComponent></ListComponent>
        </div>
        <div className="">
        <CakeChart></CakeChart>
        </div>
        </div>
    </div>
  );
}

export default Dashboard;
