import { Suspense, useEffect, useState } from "react";
import { columns } from "../../components/dataTable/columns"
import { DataTable } from "../../components/dataTable/dataTable"
import { Activity, fetchActivities } from "../dashboards/components/Api";

const DataTablePageContent = () => {
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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

const DataTablePage = () => {
  return (
    <Suspense fallback={<div>Cargando datos...</div>}>
      <DataTablePageContent />
    </Suspense>
  );
};

export default DataTablePage;