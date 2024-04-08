import { EventsList } from "../pages/dashboard/interfaces/interfaces";

export async function fetchActivities(): Promise<EventsList[]> {
  try {
    const response = await fetch("http://localhost:3000/events");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
