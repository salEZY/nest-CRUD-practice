import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'nest-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {


  constructor(private readonly connection: Connection) {
    console.log(`Connected to ${connection.options.database} on port 3306`)
  }
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
