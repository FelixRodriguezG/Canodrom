  import { Injectable } from '@nestjs/common';
  import { CreateEventsDto } from './dto/create-events.dto';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Events } from './entities/events.entity';
  import { FindManyOptions, Repository } from 'typeorm';

  @Injectable()
  export class EventsService {
    constructor(
      @InjectRepository(Events) private eventsRepository: Repository<Events>,
    ) {}

    
    async create(events: CreateEventsDto) {
      return this.eventsRepository.save(this.eventsRepository.create(events));

    }
    
    async findAll(limit: string) {
      let options: FindManyOptions<Events>;
      if (limit) options = { take: +limit };
      return await this.eventsRepository.find(options);
    }

    async findOne(title: string): Promise<Events> {
      return this.eventsRepository.findOne({ where: { title } });
    }

  }
