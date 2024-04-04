import { Controller, Get, Res,Post,Body, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { DataService } from './dataForm.service';
import { CreateDataDto } from './dto/create-dataForm.dto';
import { Data } from './entities/dataForm.entity';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}
  @Post('crear')
  async create(@Body(new ValidationPipe()) createDataDto: CreateDataDto): Promise<Data> {
    return this.dataService.create(createDataDto);
  }
  @Get('download')
  async downloadTable(@Res() res: Response): Promise<void> {
    const buffer = await this.dataService.downloadTable();
    
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=tabla.xlsx');
    res.send(buffer);
  }
}
