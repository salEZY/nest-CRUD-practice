import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post()
    async create(@Body() product: CreateProductDto): Promise<Product> {
        return await this.productService.create(product)
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Product> {
        return await this.productService.findOne(+id)
    }

    @Patch(':id')
    async update(@Param('id') id, @Body() recordToUpdate: UpdateProductDto): Promise<Product> {
        return await this.productService.update(id, recordToUpdate)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.productService.delete(id)

    }
}
