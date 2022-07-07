import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Several usages:
    //// Middleware for all controllers
    consumer.apply(LoggerMiddleware).forRoutes(ProductsController)
    //// Specific HTTP request ONLY(GET for example)
    //consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.GET })
    //// Exclude middleware for specific HTTP requests
    //consumer.apply(LoggerMiddleware).exclude({ path: 'products', method: RequestMethod.GET }).forRoutes(ProductsController)
  }
}
