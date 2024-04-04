// src/data/dto/create-data.dto.ts

import { IsNotEmpty, IsString, IsDate, IsInt, Min } from 'class-validator';

export class CreateDataDto {

  @IsNotEmpty()
 
  responsable: string;

  @IsNotEmpty()

  titulo: string;



  programa: string;



  tematica: string;



  publico: string;



  organizador: string;


 
  fechaInicio: Date;



  tipusActivitat: string;



  noSessions: number;



  noAssistencia: number;



  numAsistentes: number;


  
  numHombres: number;



  numMujeres: number;



  numNN: number;


  numNoBinari: number;


  infantsAcompanados: number;



  streaming: string;



  notes: string;
}
