import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventsService } from './events.service';
import { Events } from './entities/events.entity';
import { CreateEventsDto } from './dto/create-events.dto';

describe('EventsService', () => {
  let service: EventsService;
  let eventsRepositoryMock: Partial<Record<keyof Repository<Events>, jest.Mock>>;

  beforeEach(async () => {
    eventsRepositoryMock = {
      find: jest.fn().mockResolvedValue([
        { id: 1, title: 'Event 1', startDate: new Date(), endDate: new Date(), program: 'Program 1', repetition: 1, attendees: 100, theme: 'Theme 1', type: 'Type 1', targetAudience: 'Audience 1', Organizer: 'Organizer 1' },
        { id: 2, title: 'Event 2', startDate: new Date(), endDate: new Date(), program: 'Program 2', repetition: 2, attendees: 200, theme: 'Theme 2', type: 'Type 2', targetAudience: 'Audience 2', Organizer: 'Organizer 2' },
        { id: 3, title: 'Event 3', startDate: new Date(), endDate: new Date(), program: 'Program 3', repetition: 3, attendees: 300, theme: 'Theme 3', type: 'Type 3', targetAudience: 'Audience 3', Organizer: 'Organizer 3' },
      ]),
      create: jest.fn(),
      save: jest.fn(),
      findOne: jest.fn(),
    };
  
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        {
          provide: getRepositoryToken(Events),
          useValue: eventsRepositoryMock,
        },
      ],
    }).compile();
  
    service = module.get<EventsService>(EventsService);
  });
  

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create an event', async () => {
    const createEventDto: CreateEventsDto = {
      title: 'Test Event',
      startDate: new Date('2024-02-28T08:00:00Z'),
      endDate: new Date('2024-02-28T10:00:00Z'),
      program: 'Test Program',
      repetition: 1,
      attendees: 100,
      theme: 'Test Theme',
      type: 'Test Type',
      targetAudience: 'Test Audience',
      Organizer: 'Test Organizer',
      femaleAttendees: 0,
      maleAttendees: 0,
      nonBinaryAttendees: 0,
      undisclosedAttendees: 0,
      heardThroughTwitter: 0,
      heardThroughFacebook: 0,
      heardThroughInstagram: 0,
      heardThroughTelegram: 0,
      heardThroughMastodon: 0,
      heardThroughNewsletter: 0,
      heardThroughWeb: 0,
      heardThroughSigns: 0,
    };
  
    const createdEvent: Events = {
      id: 1,
      title: createEventDto.title,
      startDate: createEventDto.startDate,
      endDate: createEventDto.endDate,
      program: createEventDto.program,
      repetition: createEventDto.repetition,
      attendees: createEventDto.attendees,
      theme: createEventDto.theme,
      type: createEventDto.type,
      targetAudience: createEventDto.targetAudience,
      Organizer: createEventDto.Organizer,
      femaleAttendees: createEventDto.femaleAttendees || 0,
      maleAttendees: createEventDto.maleAttendees || 0,
      nonBinaryAttendees: createEventDto.nonBinaryAttendees || 0,
      undisclosedAttendees: createEventDto.undisclosedAttendees || 0,
      heardThroughTwitter: createEventDto.heardThroughTwitter || 0,
      heardThroughFacebook: createEventDto.heardThroughFacebook || 0,
      heardThroughInstagram: createEventDto.heardThroughInstagram || 0,
      heardThroughTelegram: createEventDto.heardThroughTelegram || 0,
      heardThroughMastodon: createEventDto.heardThroughMastodon || 0,
      heardThroughNewsletter: createEventDto.heardThroughNewsletter || 0,
      heardThroughWeb: createEventDto.heardThroughWeb || 0,
      heardThroughSigns: createEventDto.heardThroughSigns || 0,
    };
  
    jest.spyOn(service['eventsRepository'], 'create').mockReturnValue(createdEvent);
    jest.spyOn(service['eventsRepository'], 'save').mockResolvedValue(createdEvent);
  
    const result = await service.create(createEventDto);
  
    expect(result).toEqual(createdEvent);
    expect(service['eventsRepository'].create).toHaveBeenCalledWith(createEventDto);
    expect(service['eventsRepository'].save).toHaveBeenCalledWith(createdEvent);
  });
  

  it('should return all events', async () => {
    const result = await service.findAll('10');
    expect(result).toHaveLength(3); 
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('title');
    expect(result[0]).toHaveProperty('startDate');
    expect(result[0]).toHaveProperty('endDate');
    expect(result[0]).toHaveProperty('program');
    expect(result[0]).toHaveProperty('theme');
    expect(result[0]).toHaveProperty('type');
    expect(result[0]).toHaveProperty('targetAudience');
    expect(result[0]).toHaveProperty('Organizer');
  });

  it('should find one event by title', async () => {
    const title = 'Event 1';
    const expectedEvent = {
      id: 1,
      title: 'Event',
      startDate: new Date(),
      endDate: new Date(),
      program: 'Program 1',
      repetition: 1,
      attendees: 100,
      theme: 'Theme 1',
      type: 'Type 1',
      targetAudience: 'Audience 1',
      Organizer: 'Organizer 1',
      femaleAttendees: 50,
      maleAttendees: 100,
      nonBinaryAttendees: 20,
      undisclosedAttendees: 30,
      heardThroughTwitter: 10,
      heardThroughFacebook: 20,
      heardThroughInstagram: 30,
      heardThroughTelegram: 40,
      heardThroughMastodon: 50,
      heardThroughNewsletter: 60,
      heardThroughWeb: 70,
      heardThroughSigns: 80,
    };
  
    jest.spyOn(service['eventsRepository'], 'findOne').mockResolvedValueOnce(expectedEvent as Events);
  
    const result = await service.findOne(title);
  
    expect(result).toEqual(expectedEvent);
    expect(service['eventsRepository'].findOne).toHaveBeenCalledWith({ where: { title } });
  });
});
