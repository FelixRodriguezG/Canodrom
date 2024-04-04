// src/data/data.controller.ts

import { Controller, Post, Body, ValidationPipe,Get } from '@nestjs/common';
import { DataService } from './dataForm.service';
import { Data } from '../dataForm/entities/dataForm.entity';
import { CreateDataDto } from './dto/create-dataForm.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createDataDto: CreateDataDto): Promise<Data> {
    return this.dataService.create(createDataDto);
  }
  @Get('download')
  async downloadTable(): Promise<void> {
      await this.dataService.downloadTable();
  }
}
