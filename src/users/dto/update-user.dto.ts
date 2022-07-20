import { IsEmail, IsOptional, IsString } from "class-validator";


export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    password: string;
}