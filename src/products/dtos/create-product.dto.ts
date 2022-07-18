import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsInt()
    readonly qty: number

    @IsNotEmpty()
    @IsNumber()
    readonly price: number
}