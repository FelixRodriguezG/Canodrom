import { Suspense, useEffect, useState } from "react";
import { columns } from "../../components/dataTable/columns"
import { DataTable } from "../../components/dataTable/dataTable"
import { fetchActivities } from "./Api";
import { EventsList } from "./interfaces/interfaces";

interface DataTablePageContentProps {
  onRowClick: (events: EventsList) => void;
  onTotalschange: (newTotals: EventsList) => void;
  initialTotals: EventsList;
}

const DataTablePageContent = ({ onRowClick, onTotalschange, initialTotals }: DataTablePageContentProps) => {
  const [data, setData] = useState<EventsList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await fetchActivities();
        setData(events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data} onRowClick={onRowClick} onTotalschange={onTotalschange} initialTotals={initialTotals}/>
      
    </div>
  );
};

interface DataTablePageProps {
  onRowClick: (activity: EventsList) => void;
  onTotalschange: (newTotals: EventsList) => void;
  initialTotals: EventsList; // Añade esta línea
}

const DataTablePage = ({ onRowClick, onTotalschange, initialTotals }: DataTablePageProps) => {
  return (
    <Suspense fallback={<div>Cargando datos...</div>}>
      <DataTablePageContent onRowClick={onRowClick} onTotalschange={onTotalschange} initialTotals={initialTotals} /> 
    </Suspense>
  );
};

export default DataTablePage;