import { IsInt, IsNumber, IsString, IsOptional } from 'class-validator'

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    readonly name: string

    @IsOptional()
    @IsInt()
    readonly qty: number

    @IsOptional()
    @IsNumber()
    readonly price: number
}