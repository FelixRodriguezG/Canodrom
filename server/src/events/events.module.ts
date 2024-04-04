/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './entities/events.entity';
import moment from 'moment';

@Module({
  imports: [TypeOrmModule.forFeature([Events])],
  controllers: [EventsController],
  providers: [EventsService, {
    provide: 'MomentWrapper',
    useValue: moment
  }],
  exports:[EventsService]

})
export class EventsModule {}
