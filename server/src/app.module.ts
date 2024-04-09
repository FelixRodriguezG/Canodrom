import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { Events } from './events/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './dataForm/dataForm.module';
import { Data } from './dataForm/entities/dataForm.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mudapp-mudapp.a.aivencloud.com',
      port: 22116,
      username: 'avnadmin',
      password: 'AVNS_hrKqpPiiy920OvJoLs_',
      database: 'cano',
      entities: [User, Events,Data],
      synchronize:false,
    }),
    UserModule,
    EventsModule,
    AuthModule,
    DataModule
  ],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
