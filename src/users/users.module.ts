import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from 'src/photos/photo.entity';
import { UsersEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, PhotoEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
