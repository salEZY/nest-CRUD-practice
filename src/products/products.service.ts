import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProductsEntity } from './products.entity';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>
    ) { }


    async create(product: CreateProductDto): Promise<Product> {
        return await this.productRepository.save(product)
    }

    // findAll(): Product[] {
    //     return this.products
    // }

    // findOne(id: string): Product {
    //     return this.products.find(p => p.id === id)
    // }

    // delete(id: string): Product[] {
    //     return this.products.filter(p => p.id !== id)

    // }
}
