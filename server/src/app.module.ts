/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { Events } from './events/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mudapp-mudapp.a.aivencloud.com',
      port: 22116,
      username: 'avnadmin',
      password: 'AVNS_hrKqpPiiy920OvJoLs_',
      database: 'cano',
      entities: [User, Events],
      synchronize:false,
    }),
    UserModule,
    EventsModule,
    AuthModule,
  ],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
