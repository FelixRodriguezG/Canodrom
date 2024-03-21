import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";



function Dashboard() {
  return (
    <div>
        <CardData />
        <CollumsGraph />
        <CakeChart />
        <ListComponent />                   
    </div>
  );
}
export default Dashboard
