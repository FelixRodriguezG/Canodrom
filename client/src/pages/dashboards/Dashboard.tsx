import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";



function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center ">
        <CardData />
        <div className="pt-16">
        <CollumsGraph />
        </div>

      </div>
      <div className="flex justify-between items-">
        <ListComponent />                   
        <CakeChart />
      </div>
    </div>
  );
}
export default Dashboard
