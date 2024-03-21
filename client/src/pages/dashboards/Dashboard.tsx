import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";


function Dashboard() {
  return (
    <div>
      <div>
        <CardData></CardData>
        <CollumsGraph></CollumsGraph>
        <ListComponent></ListComponent>
        </div>
    </div>
  );
}

export default Dashboard;
