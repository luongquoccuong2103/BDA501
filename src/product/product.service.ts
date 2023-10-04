import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './../entities/product.entity';
import { products } from './../data';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async seed() {
    for (const productData of products) {
      const product = this.productRepository.create(productData);
      await this.productRepository.save(product);
    }
  }

  async getAllProducts() {
    return await this.productRepository.find();
  }
  
}
