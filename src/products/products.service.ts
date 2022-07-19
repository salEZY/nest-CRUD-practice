import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, ProductToUpdate } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { ProductsEntity } from './entities/products.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductDetailsEntity } from './entities/product-details.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>,

        @InjectRepository(ProductDetailsEntity)
        private readonly productDetailsRepository: Repository<ProductDetailsEntity>
    ) { }


    async create(product: CreateProductDto): Promise<Product> {
        // create product details
        const productDetails = await this.productDetailsRepository.save({
            partNumber: product.partNumber,
            dimension: product.dimension,
            weight: product.weight,
            origin: product.origin,
            manufacturer: product.manufacturer
        })
        // create product and add relation
        const newProduct = new ProductsEntity()
        newProduct.name = product.name;
        newProduct.price = product.price;
        newProduct.qty = product.qty;
        newProduct.productDetails = productDetails
        await this.productRepository.save(newProduct)
        return { ...newProduct, productDetails }
    }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find({ relations: ['productDetails'] })
    }

    async findOne(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id }, relations: ['productDetails'] })
        if (!product) throw new NotFoundException('Could not find product.')
        return product
    }

    async update(id: number, recordToUpdate: ProductToUpdate): Promise<Product> {
        //return await this.productRepository.update(id, recordToUpdate)
        const product = await this.productRepository.findOne({ where: { id }, relations: ['productDetails'] })
        const productDetails = await this.productDetailsRepository.findOne({ where: { id: product.productDetails.id } })
        if (!product) throw new NotFoundException('Could not find product.')

        // merge existing product with fields from the body
        const { name, price, qty, partNumber, weight, dimension, origin, manufacturer } = recordToUpdate
        this.productRepository.merge(product, { name, qty, price })
        this.productDetailsRepository.merge(productDetails, { partNumber, weight, dimension, origin, manufacturer })

        await this.productDetailsRepository.save(productDetails)
        const updatedProduct = await this.productRepository.save(product)
        return { ...updatedProduct }
    }

    async delete(productId: number, productDetailsId: number): Promise<any> {
        await Promise.all([
            await this.productRepository.delete(productId),
            await this.productDetailsRepository.delete(productDetailsId)
        ])


        return { message: `Product with id: ${productId} and product details with id: ${productDetailsId} deleted.` }
    }
}
