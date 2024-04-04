import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from '../dataForm/entities/dataForm.entity';
import * as ExcelJS from 'exceljs';
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

  async downloadTable(): Promise<void> {
    const rows = await this.dataRepository.find();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Tabla');

    // Agregar encabezados de columna
    const headers = [
        'ID',
        'Responsable',
        'Título',
        'Programa',
        'Tematica',
        'Público',
        'Organizador',
        'Fecha de Inicio',
        'Tipo de Actividad',
        'Número de Sesiones',
        'Número de Asistencia',
        'Número de Asistentes',
        'Número de Hombres',
        'Número de Mujeres',
        'Número de No Binarios',
        'Número de No Binarios',
        'Infantes Acompañados',
        'Streaming',
        'Notas'
    ];
    worksheet.addRow(headers);

    // Agregar filas de datos
    rows.forEach((row: Data) => {
        worksheet.addRow([
            row.id,
            row.responsable,
            row.titulo,
            row.programa,
            row.tematica,
            row.publico,
            row.organizador,
            row.fechaInicio instanceof Date ? row.fechaInicio.toISOString() : '',// Convertir fecha a formato ISO (opcional)
            row.tipusActivitat,
            row.noSessions,
            row.noAssistencia,
            row.numAsistentes,
            row.numHombres,
            row.numMujeres,
            row.numNN,
            row.numNoBinari,
            row.infantsAcompanados,
            row.streaming,
            row.notes,
            console.log(row)
        ]);
    });

    try {
      await workbook.xlsx.writeFile('tabla.xlsx');
      console.log('Archivo Excel creado correctamente');
  } catch (error) {
      console.error('Error al escribir el archivo Excel:', error);
  }
  
}

  
}