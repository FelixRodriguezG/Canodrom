/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateEventsDto } from './dto/create-events.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Events } from './entities/event.entity';
import { FindManyOptions, MoreThanOrEqual, Repository } from 'typeorm';

  @Injectable()
  export class EventsService {
    constructor(
      @InjectRepository(Events) private eventsRepository: Repository<Events>,
      @Inject('MomentWrapper') private momentWrapper: moment.Moment
    ) {}

    async create(events: CreateEventsDto) {
      return this.eventsRepository.save(this.eventsRepository.create(events));

    }

    
    async findAll(limit: string) {
      let options: FindManyOptions<Events>;
      if (limit) options = { take: +limit };
      return await this.eventsRepository.find(options);
    }

  async findOne(title: string): Promise <Events> {
    return this.eventsRepository.findOneBy({ title });
  }
  async filterByLastThreeMonths(): Promise<Events[]> {
    const currentDate = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

    return this.eventsRepository.find({
      where: {
        startDate: MoreThanOrEqual(threeMonthsAgo),
      },
    });
  }
  async filterByLastSixMonths(): Promise<Events[]> {
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    return this.eventsRepository.find({
      where: {
        startDate: MoreThanOrEqual(sixMonthsAgo),
      },
    });
  }

  async filterByLastYear(): Promise<Events[]> {
    const currentDate = new Date();
    const lastYear = new Date();
    lastYear.setFullYear(currentDate.getFullYear() - 1);

    return this.eventsRepository.find({
      where: {
        startDate: MoreThanOrEqual(lastYear),
      },
    });
  }
  async filterByDateRange(startDate:Date, endDate:string): Promise<Events[]> {

  
    // Realizar la consulta con MoreThanOrEqual
    return await this.eventsRepository.find({
      where: {
        startDate: MoreThanOrEqual(new Date(startDate)),
        endDate: MoreThanOrEqual(new Date(endDate)),
      },
    });
  }
  async findAllEvents(): Promise<Events[]> {
    return await this.eventsRepository.find();
  }
  async filterByStartDate(startDate: Date): Promise<Events[]> {
    return await this.eventsRepository.find({
      where: {
        startDate: MoreThanOrEqual(startDate),
      },
    });
  }
  }
