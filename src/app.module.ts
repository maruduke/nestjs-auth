import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/Entity/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "aktl132!#@",
    "database": "auth",
    "entities": [User],
    "synchronize": true
}), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
