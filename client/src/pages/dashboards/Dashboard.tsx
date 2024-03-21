import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";



function Dashboard() {
  return (
    <div>
      <div>
        <CardData></CardData>
        <CollumsGraph></CollumsGraph>
        <ListComponent></ListComponent>
        <CakeChart></CakeChart>
        </div>
    </div>
  );
}

export default Dashboard;
