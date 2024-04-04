// src/data/data.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataService } from './dataForm.service';
import { DataController } from './dataForm.controller';
import { Data } from '../dataForm/entities/dataForm.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  controllers: [DataController],
  providers: [DataService],
  exports:[DataService]
})
export class DataModule {}
