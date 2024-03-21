import { Test, TestingModule } from '@nestjs/testing';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events.dto';
import { Repository } from 'typeorm';
import { Events } from './entities/events.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('EventsController', () => {
  let controller: EventsController;
  let eventsService: EventsService;
  let eventsRepositoryMock: Partial<Record<keyof Repository<Events>, jest.Mock>>;

  beforeEach(async () => {
    eventsRepositoryMock = {
      find: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [
        EventsService,
        {
          provide: getRepositoryToken(Events),
          useValue: eventsRepositoryMock,
        },
      ],
    }).compile();

    controller = module.get<EventsController>(EventsController);
    eventsService = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  
  
  describe('findAll', () => {
    it('should return all events', async () => {
      const limit = '10'; 
      const mockEvents: Events[] = [
        { 
          id: 1, 
          title: 'Event 1', 
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
          maleAttendees: 30, 
          nonBinaryAttendees: 15, 
          undisclosedAttendees: 5, 
          heardThroughTwitter: 10, 
          heardThroughFacebook: 15, 
          heardThroughInstagram: 20, 
          heardThroughTelegram: 5, 
          heardThroughMastodon: 3, 
          heardThroughNewsletter: 12, 
          heardThroughWeb: 25, 
          heardThroughSigns: 2, 
        },
        { 
          id: 2, 
          title: 'Event 2', 
          startDate: new Date(), 
          endDate: new Date(), 
          program: 'Program 2', 
          repetition: 2, 
          attendees: 200, 
          theme: 'Theme 2', 
          type: 'Type 2', 
          targetAudience: 'Audience 2', 
          Organizer: 'Organizer 2', 
          femaleAttendees: 100, 
          maleAttendees: 70, 
          nonBinaryAttendees: 20, 
          undisclosedAttendees: 10, 
          heardThroughTwitter: 20, 
          heardThroughFacebook: 25, 
          heardThroughInstagram: 30, 
          heardThroughTelegram: 15, 
          heardThroughMastodon: 5, 
          heardThroughNewsletter: 20, 
          heardThroughWeb: 40, 
          heardThroughSigns: 3, 
        },
        { 
          id: 3, 
          title: 'Event 3', 
          startDate: new Date(), 
          endDate: new Date(), 
          program: 'Program 3', 
          repetition: 3, 
          attendees: 300, 
          theme: 'Theme 3', 
          type: 'Type 3', 
          targetAudience: 'Audience 3', 
          Organizer: 'Organizer 3', 
          femaleAttendees: 150, 
          maleAttendees: 120, 
          nonBinaryAttendees: 25, 
          undisclosedAttendees: 5, 
          heardThroughTwitter: 30, 
          heardThroughFacebook: 35, 
          heardThroughInstagram: 40, 
          heardThroughTelegram: 20, 
          heardThroughMastodon: 8, 
          heardThroughNewsletter: 25, 
          heardThroughWeb: 50, 
          heardThroughSigns: 5, 
        },
      ];
      
      jest.spyOn(eventsService, 'findAll').mockResolvedValue(mockEvents);

      const result = await controller.findAll(limit);

      expect(result).toEqual(mockEvents);
      expect(eventsService.findAll).toHaveBeenCalledWith(limit);
    });
  });


  describe('findOne', () => {
    it('should return the specified event', async () => {
      const title = 'Event 1'; 
      const mockEvent: Events = { 
        id: 1, 
        title, 
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
        maleAttendees: 30, 
        nonBinaryAttendees: 15, 
        undisclosedAttendees: 5, 
        heardThroughTwitter: 10, 
        heardThroughFacebook: 15, 
        heardThroughInstagram: 20, 
        heardThroughTelegram: 5, 
        heardThroughMastodon: 3, 
        heardThroughNewsletter: 12, 
        heardThroughWeb: 25, 
        heardThroughSigns: 2, 
      };
      
      jest.spyOn(eventsService, 'findOne').mockResolvedValue(mockEvent);

      const result = await controller.findOne(title);

      expect(result).toEqual(mockEvent);
      expect(eventsService.findOne).toHaveBeenCalledWith(title);
    });
  });

});
