// src/data/data.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from '../dataForm/entities/dataForm.entity';
import { CreateDataDto } from './dto/create-dataForm.dto';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Data)
    private readonly dataRepository: Repository<Data>,
  ) {}

  async create(createDataDto: CreateDataDto): Promise<Data> {
    const newData = this.dataRepository.create(createDataDto);
    return this.dataRepository.save(newData);
  }
}
