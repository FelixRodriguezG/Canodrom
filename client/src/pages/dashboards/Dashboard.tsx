import { ListComponent } from "./components/ListComponent"
import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";
import CakeChart from "./components/CakeGraph";



function Dashboard() {
  return (
    <main className="flex flex-col  min-h-[1080px] gap-7 ">
      <div className="flex justify-between items-center max-2xl:flex-col gap-3 mx-7">
        <CardData />
        <div className="">
        <CollumsGraph />
        </div>

      </div>
      <div className="flex justify-between max-2xl:flex-col gap-3 max-2xl:items-center mx-7">
        <ListComponent />                   
        <CakeChart />
      </div>
    </main>
  );
}
export default Dashboard
