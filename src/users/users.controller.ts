import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
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
}
