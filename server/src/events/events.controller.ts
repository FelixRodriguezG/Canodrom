import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events.dto';
import { UpdateEventsDto } from './dto/update-events.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventsDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll(@Query('limit') limit: string) {
    return this.eventsService.findAll(limit);
  }

  @Get('/find/:title')
  findOne(@Param('title') title: string) {
    return this.eventsService.findOne(title);
  }
}
