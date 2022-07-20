import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ProductsModule,
    UsersModule,
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }
  // configure(consumer: MiddlewareConsumer) {
  //   // Several usages:
  //   //// Middleware for all controllers
  //   consumer.apply(LoggerMiddleware).forRoutes(ProductsController)
  //   //// Specific HTTP request ONLY(GET for example)
  //   //consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.GET })
  //   //// Exclude middleware for specific HTTP requests
  //   //consumer.apply(LoggerMiddleware).exclude({ path: 'products', method: RequestMethod.GET }).forRoutes(ProductsController)
  // }
}
