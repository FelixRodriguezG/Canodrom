
import { Suspense, useEffect, useState } from "react";
import { columns } from "../../components/dataTable/columns"
import { DataTable } from "../../components/dataTable/dataTable"
import { Activity, fetchActivities } from "../dashboards/components/Api";

const DataTablePageContent = ({ onRowClick }: { onRowClick: (activity: Activity) => void }) => {
  const [data, setData] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activities = await fetchActivities();
        setData(activities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data} onRowClick={onRowClick} />
    </div>
  );
};

const DataTablePage = ({ onRowClick }: { onRowClick: (activity: Activity) => void }) => {
  return (
    <Suspense fallback={<div>Cargando datos...</div>}>
      <DataTablePageContent onRowClick={onRowClick} />
    </Suspense>
  );
};

export default DataTablePage;
