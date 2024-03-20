import CardData from "./components/CardData";
import CollumsGraph from "./components/CollumsGraph";

function Dashboard() {
  return (
    <div className="max-w-screen-2xl pr-10 flex justify-center gap-36">
      <CardData />
      <CollumsGraph />
    </div>
  );
}

export default Dashboard;
