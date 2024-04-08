/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events.dto';
import { Moment } from 'moment';


@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventsDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get('/filter/all-events')
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
  @Get('/filter/last-three-months')
  async filterByLastThreeMonths() {
    const events = await this.eventsService.filterByLastThreeMonths();
    const moment = require('moment');

    events.forEach((event) => {
      event.startDate = moment(event.startDate).format('YYYY-MM-DD');
      event.endDate = moment(event.endDate).format('YYYY-MM-DD');
    });

    return events;
  }
  @Get('/filter/last-six-months')
  async filterByLastSixMonths() {
    const events = await this.eventsService.filterByLastSixMonths();
    const moment = require('moment');

    events.forEach((event) => {
      event.startDate = moment(event.startDate).format('YYYY-MM-DD');
      event.endDate = moment(event.endDate).format('YYYY-MM-DD');
    });

    return events;
  }

  @Get('/filter/last-year')
  async filterByLastYear() {
    const events = await this.eventsService.filterByLastYear();
    const moment = require('moment');

    events.forEach((event) => {
      event.startDate = moment(event.startDate).format('YYYY-MM-DD');
      event.endDate = moment(event.endDate).format('YYYY-MM-DD');
    });

    return events;
  }
  @Get('/filter/by-date-range')
  async filterByStartDate(
    @Query('startDate') startDate: string,
  ) {
    const moment = require('moment');
    // Formatear la cadena de fecha de inicio a YYYY-MM-DD
    const formattedStartDate: Date = moment(startDate).format('YYYY-MM-DD');
    
    // Realizar la consulta para obtener los eventos que tengan la fecha de inicio igual o posterior a la fecha especificada
    const events = await this.eventsService.filterByStartDate(formattedStartDate);

    // Formatear las fechas de inicio de los eventos en el resultado
    events.forEach((event) => {
      event.startDate = moment(event.startDate).format('YYYY-MM-DD');
    });

    return events;
  }
}




  



