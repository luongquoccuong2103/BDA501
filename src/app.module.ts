import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Product } from './entities/product.entity';
import { ProductService } from './product/product.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'products',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [AppController],
  providers: [AppService,ProductService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly productService: ProductService,
    private readonly connection: Connection,
  ) {}

  async onModuleInit() {
    await this.connection.synchronize(true);
    await this.productService.seed();
  }
}