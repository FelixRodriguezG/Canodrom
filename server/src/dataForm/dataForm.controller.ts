import { Controller, Get, Res,Post,Body, ValidationPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Response } from 'express';
import { DataService } from './dataForm.service';
import { CreateDataDto } from './dto/create-dataForm.dto';
import { Data } from './entities/dataForm.entity';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcel(@UploadedFile() file, @Res() res: Response): Promise<void> {
    try {
      await this.dataService.processExcel(file);
      res.status(200).send('Archivo Excel procesado correctamente y datos guardados en la base de datos.');
    } catch (error) {
      console.error('Error al procesar el archivo Excel:', error);
      res.status(500).send('Error al procesar el archivo Excel.');
    }
  }
}
