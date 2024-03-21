export class CreateEventsDto {
    title: string;
    startDate: Date;
    endDate: Date;
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
    heardThroughTelegram?: number;
    heardThroughMastodon?: number;
    heardThroughNewsletter?: number;
    heardThroughWeb?: number;
    heardThroughSigns?: number;
}
