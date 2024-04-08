import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect, } from "react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { EventsList } from "@/pages/dashboard/interfaces/interfaces";
import { set } from "date-fns";

export interface DataTableProps<TData extends EventsList, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick?: (data: TData) => void;
  onTotalschange: (newTotals: EventsList) => void;
  onTypeCountsChange: (newTypeCounts: any) => void;
  onThemeCountsChange: (newThemeCounts: any) => void;
  initialTotals: EventsList;
}

export function DataTable<TData extends EventsList, TValue>({
  columns,
  data,
  onRowClick,
  onTotalschange,
  onTypeCountsChange,
  onThemeCountsChange,
  initialTotals,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterType, setFilterType] = useState("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [tableData, setTableData] = useState<TData[]>(data);
  const [_totals, setTotals] = useState<EventsList>(initialTotals);
  const [_typeCounts, setTypeCounts] = useState<{ [key: string]: number }>({});
  const [_themeCounts, setThemeCounts] = useState<{ [key: string]: number }>({})

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const fetchData = async (endpoint: string) => {
    try {
      const response = await fetch(endpoint);
      const newData = await response.json();
      setTableData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterTypeChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedFilterType = event.target.value;
    setFilterType(selectedFilterType);

    let endpoint = "";
    switch (selectedFilterType) {
      case "last-three-months":
        endpoint = "http://localhost:3000/events/filter/last-three-months";
        break;
      case "last-six-months":
        endpoint = "http://localhost:3000/events/filter/last-six-months";
        break;
      case "last-year":
        endpoint = "http://localhost:3000/events/filter/last-year";
        break;
      case "all-events":
        endpoint = "http://localhost:3000/events/filter/all-events";
        break;
      default:
        break;
    }

    if (endpoint) {
      await fetchData(endpoint);
    }
  };
  const handleFilterByDateRange = async () => {
    if (!startDate || !endDate) {
      console.error("Por favor selecciona las fechas de inicio y fin.");
      return;
    }

    const endpoint = `http://localhost:3000/events/filter/by-date-range?startDate=${startDate}&endDate=${endDate}`;

    await fetchData(endpoint);
  };
  useEffect(() => {
    const themeCounts = table.getRowModel().rows.reduce((acc, row) => {
      const theme = row.original.theme;
      if (theme) {
        if (!acc[theme]) {
          acc[theme] = 1;
        } else {
          acc[theme] += 1;
        }
      }
      return acc;
    }, {} as { [key: string]: number });
  
    console.log('contadortemas',themeCounts);
  }, [table.getRowModel().rows]);

  useEffect(() => {
    const calculateTotals = () => {
      const totals = table.getRowModel().rows.reduce((acc, row) => {
        acc.attendees += row.original.attendees;
        acc.femaleAttendees += row.original.femaleAttendees;
        acc.maleAttendees += row.original.maleAttendees;
        acc.nonBinaryAttendees += row.original.nonBinaryAttendees;
        acc.undisclosedAttendees += row.original.undisclosedAttendees;
        acc.heardThroughTwitter += row.original.heardThroughTwitter;
        acc.heardThroughFacebook += row.original.heardThroughFacebook;
        acc.heardThroughInstagram += row.original.heardThroughInstagram;
        acc.heardThroughMastodon += row.original.heardThroughMastodon;
        acc.heardThroughNewsletter += row.original.heardThroughNewsletter;
        acc.heardThroughWeb += row.original.heardThroughWeb;
        acc.heardThroughSigns += row.original.heardThroughSigns;
        acc.heardThroughOther += row.original.heardThroughOther;
        return acc;
      }, initialTotals);
      return totals;
    };
    const newTotals = calculateTotals();
    setTotals(newTotals);
    onTotalschange(newTotals);
  }, [table.getRowModel().rows]);


  useEffect(() => {
    const calculateThemeCounts = () => {
      const themeCounts = table.getRowModel().rows.reduce((acc, row) => {
        const theme = row.original.theme;
        if (theme) {
          if (!acc[theme]) {
            acc[theme] = 1;
          } else {
            acc[theme] += 1;
          }
        }
        return acc;
      }, {} as { [key: string]: number });
      return themeCounts;
    };
  
    const newThemeCounts = calculateThemeCounts();
    setThemeCounts(newThemeCounts);
    onThemeCountsChange(newThemeCounts);
  }, [table.getRowModel().rows]);

  useEffect(() => {
    const calculateTypeCounts = () => {
      const typeCounts = table.getRowModel().rows.reduce((acc, row) => {
        const type = row.original.type;
        if (type) {
          if (!acc[type]) {
            acc[type] = 1;
          } else {
            acc[type] += 1;
          }
        }
        return acc;
      }, {} as { [key: string]: number });
      return typeCounts;
    };
  
    const newTypeCounts = calculateTypeCounts();
    setTypeCounts(newTypeCounts);
    onTypeCountsChange(newTypeCounts);
  }, [table.getRowModel().rows]);





  return (
    <>
      <div className="rounded-md border  border-gray-300 w-[98vw]">
        <div className="flex items-center p-4">
          <Input
            placeholder="Cerca títol"
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm mr-4"
          />
          <Input
            placeholder="Cerca temàtica"
            value={(table.getColumn("theme")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("theme")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <Input
            placeholder="Cerca tipus d'activitat"
            value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("type")?.setFilterValue(event.target.value)
            }
            className="max-w-sm mx-4"
          />
          <select
            value={filterType}
            onChange={handleFilterTypeChange}
            className="form-select max-w-sm"
          >
            <option value="">Selecciona Eventos</option>
            <option value="all-events">Todos los eventos</option>
            <option value="last-three-months">Últimos tres meses</option>
            <option value="last-six-months">Últimos seis meses</option>
            <option value="last-year">Último año</option>
          </select>
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            className="form-select max-w-sm"
          />
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="form-select max-w-sm"
          />
          <button onClick={handleFilterByDateRange}>
            Filtrar por rango de fecha
          </button>
        </div>
        <ScrollArea className="h-[500px] rounded-md border p-4">
          <Table className="shadow-xl">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="cursor-pointer hover:bg-[#46FCD6]"
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => onRowClick?.(row.original)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </>
  );
}
