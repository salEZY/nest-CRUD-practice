import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './interfaces/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    async create(@Body() user: CreateUserDTO): Promise<User> {
        return await this.userService.create(user)
    }

    @Get()
    async find(): Promise<User[]> {
        return await this.userService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id): Promise<User> {
        return await this.userService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id', new ParseIntPipe()) id, @Body() user: UpdateUserDTO): Promise<UpdateResult> {
        return await this.userService.update(id, user)
    }

    @Delete(":id")
    async delete(@Param('id', new ParseIntPipe()) id): Promise<DeleteResult> {
        return await this.userService.delete(id)
    }
}
