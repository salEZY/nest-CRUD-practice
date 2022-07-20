import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { PhotoEntity } from "src/photos/photo.entity";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsArray()
    photos: PhotoEntity[]
}