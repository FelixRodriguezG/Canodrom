// src/data/data.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number =0;

  @Column({ length: 255 })
  responsable: string;

  @Column({ length: 255 })
  titulo: string;

  @Column({ length: 255 })
  programa: string;

  @Column({ length: 255 })
  tematica: string;

  @Column({ length: 255 })
  publico: string;

  @Column({ length: 255 })
  organizador: string;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ length: 255 })
  tipusActivitat: string;

  @Column('int')
  noSessions: number;

  @Column('int')
  noAssistencia: number;

  @Column('int')
  numAsistentes: number;

  @Column('int')
  numHombres: number;

  @Column('int')
  numMujeres: number;

  @Column('int')
  numNN: number;

  @Column('int')
  numNoBinari: number;

  @Column('int')
  infantsAcompanados: number;

  @Column({ length: 255 })
  streaming: string;

  @Column('text')
  notes: string;
}
