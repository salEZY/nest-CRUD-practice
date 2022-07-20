import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from 'src/photos/photo.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user';
import { UsersEntity } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private readonly userRepository: Repository<UsersEntity>,
        @InjectRepository(PhotoEntity) private readonly photoRepository: Repository<PhotoEntity>
    ) { }

    async create(user: CreateUserDTO): Promise<User> {
        return await this.userRepository.save(user)
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ['photos'] })
    }
}
