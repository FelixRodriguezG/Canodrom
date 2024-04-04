/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events.dto';


@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventsDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  async findAll(@Query('limit') limit: string) {
      const events = await this.eventsService.findAll(limit);

      const moment = require('moment')

      events.forEach((event) => {
          event.startDate = moment(event.startDate).format('YYYY-MM-DD');
      });

      events.forEach((event) => {
        event.endDate = moment(event.endDate).format('YYYY-MM-DD');
    });

      return events;
  }

  @Get('/find/:title')
  findOne(@Param('title') title: string) {
    return this.eventsService.findOne(title);
  }
}
