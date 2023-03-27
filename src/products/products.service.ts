import { DatabaseService } from '@app/database';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private database: DatabaseService) {}
  
  async create(createProductDto: CreateProductDto):  Promise<Product> {
    const newProduct =  await this.database.Product().create(createProductDto)
    return newProduct;
  }

  async findAll(): Promise<Product[]> {
    return await this.database.Product().getAll();
  }

  async findOne(id: string):  Promise<Product> {
    return await this.database.Product().get(id) ;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updateProduct =  await this.database.Product().update(id,updateProductDto)
    return updateProduct;
  }

  async remove(id: string): Promise<Product[]> {
    await this.database.Product().delete(id);  
    return await this.database.Product().getAll();;
  }
}
