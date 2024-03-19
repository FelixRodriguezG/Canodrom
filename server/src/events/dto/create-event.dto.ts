export class CreateEventDto {
    title: string;
    startDate: Date;
    endDate: Date;
    program: string;
    repetition: number;
    attendees: number;
    theme:string;
    type: string;
    targetAudience: string;
    Organizer: string; 
}
