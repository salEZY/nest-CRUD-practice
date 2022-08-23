import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { PhotoEntity } from 'src/photos/photo.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './interfaces/user';
import { UsersEntity } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private readonly userRepository: Repository<UsersEntity>,
        //@InjectRepository(PhotoEntity) private readonly photoRepository: Repository<PhotoEntity>
    ) { }

    async create(user: CreateUserDTO): Promise<User> {
        return await this.userRepository.save(user)
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ['photos'] })
    }

    async findOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id }, relations: ['photos'] })
        if (!user) throw new NotFoundException('Could not find user.')
        return user
    }

    async update(id: number, user: UpdateUserDTO): Promise<UpdateResult> {
        return await this.userRepository.update(id, user)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(id)
    }
}
