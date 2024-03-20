import CakeGraph from "./components/CakeGraph"
import CardData from "./components/CardData"
import CollumsGraph from "./components/CollumsGraph"

function Dashboard() {
  return (
    <div>
      <div>
        <CardData/>
        <CollumsGraph/>
        <CakeGraph />
        </div>
    </div>
  );
}

export default Dashboard;
