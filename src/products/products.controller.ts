import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';

import { Request, Response, } from 'express';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
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
        return this.productService.delete(params.id)
    }
}
