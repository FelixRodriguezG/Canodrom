import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDto } from './dto/create-events.dto';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('/create')
  create(@Body() createEventDto: CreateEventsDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get('/filter/all-events')
  async findAll(@Query('limit') limit: string) {
    const events = await this.eventsService.findAll(limit);

    const moment = require('moment');

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
  async filterByStartDate(@Query('startDate') startDate: string) {
    const moment = require('moment');

    const formattedStartDate: Date = moment(startDate).format('YYYY-MM-DD');

    const events =
      await this.eventsService.filterByStartDate(formattedStartDate);

    events.forEach((event) => {
      event.startDate = moment(event.startDate).format('YYYY-MM-DD');
    });

    return events;
  }
  @Get('download')
  async downloadTable(@Res() res: Response): Promise<void> {
    const buffer = await this.eventsService.downloadTable();
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=tabla.xlsx');
    res.send(buffer);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcel(@UploadedFile() file, @Res() res: Response): Promise<void> {
    try {
      await this.eventsService.processExcel(file);
      res
        .status(200)
        .send(
          'Archivo Excel procesado correctamente y datos guardados en la base de datos.',
        );
    } catch (error) {
      console.error('Error al procesar el archivo Excel:', error);
      res.status(500).send('Error al procesar el archivo Excel.');
    }
  }
}
