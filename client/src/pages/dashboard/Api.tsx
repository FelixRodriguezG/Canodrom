export interface Activity {
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

export interface DataProps{
    data: Activity| null;
    title?: string;
  
}
export async function fetchActivities(): Promise<Activity[]> {
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