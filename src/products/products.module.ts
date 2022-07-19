import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsEntity } from './entities/products.entity';
import { ProductsService } from './products.service';
import { ProductDetailsEntity } from './entities/product-details.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity, ProductDetailsEntity])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
