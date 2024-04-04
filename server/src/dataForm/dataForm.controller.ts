import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { DataService } from './dataForm.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('download')
  async downloadTable(@Res() res: Response): Promise<void> {
    const buffer = await this.dataService.downloadTable();
    
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=tabla.xlsx');
    res.send(buffer);
  }
}
