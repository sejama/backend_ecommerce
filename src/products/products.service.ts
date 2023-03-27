import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './schema/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  /**
   * 
   * @param createProductDto 
   * @returns 
   */
  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  /**
   * 
   * @returns 
   */
  findAll() {
    return this.productRepository.findAll();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  findOne(id: string) {
    return this.productRepository.findOne(id);
  }

  /**
   * 
   * @param id 
   * @param updateProductDto 
   * @returns 
   */
  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  remove(id: string) {
    return this.productRepository.remove(id);
  }
}
