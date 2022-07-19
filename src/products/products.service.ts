import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, ProductToUpdate } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'
import { ProductsEntity } from './entities/products.entity';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>
    ) { }


    async create(product: CreateProductDto): Promise<Product> {
        return await this.productRepository.save(product)
    }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find()
    }

    async findOne(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id } })
        if (!product) throw new NotFoundException('Could not find product.')
        return product
    }

    async update(id: number, recordToUpdate: ProductToUpdate): Promise<Product> {
        //return await this.productRepository.update(id, recordToUpdate)
        const product = await this.productRepository.findOne({ where: { id } })
        if (!product) throw new NotFoundException('Could not find product.')

        // merge existing product with fields from the body
        await this.productRepository.merge(product, recordToUpdate)
        return await this.productRepository.save(product)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.productRepository.delete(id)

    }
}
