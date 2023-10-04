import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/products') // Endpoint to get all products
  async getAllProducts() {
    return this.productService.getAllProducts();
  }
}
