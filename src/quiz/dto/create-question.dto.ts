import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { CategoryDto } from "./create-category.dto";


export class CreateQuestionDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    text: string;

    @IsArray()
    categories: CategoryDto[]
}