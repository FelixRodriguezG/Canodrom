export class CreateEventsDto {
    personInCharge?:string;
    title: string;
    startDate: Date;
    program?: string;
    repetition?: number;
    theme?: string;
    type?: string;
    targetAudience?: string;
    Organizer?: string;
    attendees?: number;
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
    children?:number;
    streaming?:string;
    notes?:string;
    endDate?:string
}