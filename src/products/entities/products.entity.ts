import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetailsEntity } from "./product-details.entity";

@Entity({ name: 'products' })
export class ProductsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('int')
    qty: number;

    @Column()
    price: number;

    @OneToOne(type => ProductDetailsEntity)
    @JoinColumn()
    productDetails: ProductDetailsEntity
}