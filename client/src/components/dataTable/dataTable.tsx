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
} from "@/components/ui/table"
import { useState } from "react"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

export interface EventDataTable {
  attendees: number;
  femaleAttendees: number;
  maleAttendees: number;
  nonBinaryAttendees: number;
  undisclosedAttendees: number;
  heardThroughTwitter: number;
  heardThroughFacebook: number;
  heardThroughInstagram: number;
  heardThroughMastodon: number;
  heardThroughNewsletter: number;
  heardThroughWeb: number;
  heardThroughSigns: number;
  heardThroughOther: number;
  // ... any other properties that you need
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick?: (data: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
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

  
  const totals = table.getRowModel().rows.reduce(
    (acc, row) => {
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
    },
    {
      attendees: 0,
      femaleAttendees: 0,
      maleAttendees: 0,
      nonBinaryAttendees: 0,
      undisclosedAttendees: 0,
      heardThroughTwitter: 0,
      heardThroughFacebook: 0,
      heardThroughInstagram: 0,
      heardThroughMastodon: 0,
      heardThroughNewsletter: 0,
      heardThroughWeb: 0,
      heardThroughSigns: 0,
      heardThroughOther: 0,
    }
  );
  
  console.log(totals);
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
        </div>
        <Table className="shadow-xl">
        <ScrollArea className="h-[500px] rounded-md border p-4">
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
          </ScrollArea>
        </Table>
      </div>
    </>
  );
}
