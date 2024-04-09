/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { CreateEventsDto } from './dto/create-events.dto';
import * as ExcelJS from 'exceljs';
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
  private async createExcelWorkbook(events: Events[]): Promise<ExcelJS.Workbook> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Events');

    const headers = Object.keys(events[0]);
    worksheet.addRow(headers);

    events.forEach(event => {
      const rowData = Object.values(event);
      worksheet.addRow(rowData);
    });
    return workbook;
  }
  async downloadTable(): Promise<Buffer> {
    const rows = await this.eventsRepository.find();
    const workbook = await this.createExcelWorkbook(rows);
    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }
  async processExcel(file): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);
    const worksheet = workbook.worksheets[0];
    worksheet.eachRow(async (row, rowNumber) => {
      if (rowNumber === 1) return;
      const rowValues = row.values;
      const [
        personInCharge,
        title,
        startDate,
        program,
        repetition,
        theme,
        type,
        targetAudience,
        Organizer,
        attendees,
        femaleAttendees,
        maleAttendees,
        nonBinaryAttendees,
        undisclosedAttendees,
        heardThroughTwitter,
        heardThroughFacebook,
        heardThroughInstagram,
        heardThroughMastodon,
        heardThroughNewsletter,
        heardThroughWeb,
        heardThroughSigns,
        heardThroughOther,
        children,
        streaming,
        notes,
        endDate,
      ] = Object.keys(rowValues).map(key => rowValues[key]);
      const newEvent = this.eventsRepository.create({
        personInCharge,
        title,
         startDate ,
        program,
        repetition,
        theme,
        type,
        targetAudience,
        Organizer,
        attendees,
        femaleAttendees,
        maleAttendees,
        nonBinaryAttendees,
        undisclosedAttendees,
        heardThroughTwitter,
        heardThroughFacebook,
        heardThroughInstagram,
        heardThroughMastodon,
        heardThroughNewsletter,
        heardThroughWeb,
        heardThroughSigns,
        heardThroughOther,
        children,
        streaming,
        notes,
        endDate,
      });
      try {
        await this.eventsRepository.save(newEvent);
      } catch (error) {
        console.error('Error al guardar el evento:', error);
      }
    });
  }
  }
