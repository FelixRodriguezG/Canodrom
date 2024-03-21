import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";



function Dashboard() {
  return (
    <div>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CardData></CardData>
        <CollumsGraph></CollumsGraph>
        <ListComponent></ListComponent>
        <CakeChart></CakeChart>
        </div>
    </div>
  );
}

export default Dashboard;
