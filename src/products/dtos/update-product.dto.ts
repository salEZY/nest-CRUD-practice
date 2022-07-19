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


    @IsOptional()
    @IsString()
    readonly partNumber: string

    @IsOptional()
    @IsString()
    readonly dimension: string

    @IsOptional()
    @IsNumber()
    readonly weight: number

    @IsOptional()
    @IsString()
    readonly manufacturer: string

    @IsOptional()
    @IsString()
    readonly origin: string
}