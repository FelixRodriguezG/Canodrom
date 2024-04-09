import { EventsList } from "../pages/dashboard/interfaces/interfaces";
import axios from 'axios';

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

const url = 'http://localhost:3000/auth/register';

export const registre = (userName:string, email: string, password: string ) => axios.post(url, {
  userName,email, password
});