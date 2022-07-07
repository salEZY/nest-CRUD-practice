import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    // DB Logic
    products: Product[] = []

    create(product: Product) {
        this.products.push(product)
        return this.products
    }

    findAll(): Product[] {
        return this.products
    }

    findOne(id: string): Product {
        return this.products.find(p => p.id === id)
    }

    delete(id: string): Product[] {
        return this.products.filter(p => p.id !== id)
    }
}
