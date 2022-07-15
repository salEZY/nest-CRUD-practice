import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, Res, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post()
    async create(@Body() product: CreateProductDto): Promise<Product[]> {
        return this.productService.create(product)
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll()
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Product> {
        return this.productService.findOne(params.id)
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Product[]> {
        //return this.productService.delete(params.id)
        throw new NotFoundException()
    }
}
