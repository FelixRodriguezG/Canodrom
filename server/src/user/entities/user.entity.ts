import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:false})
    userName: string;
    @Column({unique:true, nullable:false})
    email:string
    @Column({nullable:false})
    password: string;
    @Column({default:"user"})
    role: string;
  }