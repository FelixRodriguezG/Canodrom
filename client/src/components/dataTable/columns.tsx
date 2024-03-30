import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button";

export type EventsList = {
    title: string;
    startDate: string;
    endDate: string;
    program: string;
    repetition: number;
    attendees: number;
    theme: string;
    type: string;
    targetAudience: string;
    Organizer: string;
    femaleAttendees?: number;
    maleAttendees?: number;
    nonBinaryAttendees?: number;
    undisclosedAttendees?: number;
    heardThroughTwitter?: number;
    heardThroughFacebook?: number;
    heardThroughInstagram?: number;
    heardThroughMastodon?: number;
    heardThroughNewsletter?: number;
    heardThroughWeb?: number;
    heardThroughSigns?: number;
    heardThroughOther?: number;
}

export const columns: ColumnDef<EventsList>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Títol
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    }
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Data inici
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    }
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Data fi
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    }
  },
  {
    accessorKey: "repetition",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Repetició
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    }
  },
  {
    accessorKey: "attendees",
    header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Assistents
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    }
  },
  {
    accessorKey: "public",
    header: "Públic",
  },
  {
    accessorKey: "organizer",
    header: "Organitzador",
  },
]