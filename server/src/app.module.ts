import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { Events } from './events/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
imports: [
ConfigModule.forRoot({
envFilePath: '.env',
isGlobal: true,
}),
TypeOrmModule.forRoot({
type: process.env.DB_TYPE as any,
host: process.env.DB_HOST,
port: parseInt(process.env.DB_PORT),
username: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
entities: [User, Events],
synchronize: process.env.DB_SYNCHRONIZE === 'true',
}),
UserModule,
EventsModule,
AuthModule,
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}