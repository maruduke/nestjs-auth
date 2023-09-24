import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "aktl132!#@",
    "database": "auth",
    "entities": ["src/user/Dto/User"],
    "synchronize": true
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
