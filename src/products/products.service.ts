import { Injectable, NotFoundException } from '@nestjs/common';
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
  async findOne(id: string) {
    const prod = await this.productRepository.findOne(id);
    if(prod){
      return prod;
    }else{
      throw new NotFoundException('Product not found');
    }
    
  }

  /**
   * 
   * @param id 
   * @param updateProductDto 
   * @returns 
   */
  async update(id: string, updateProductDto: UpdateProductDto) {
    const prod = await this.productRepository.update(id, updateProductDto);
    if(prod){
      return prod;
    }else{
      throw new NotFoundException('Product not found');
    }
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: string) {
    const prod = await this.productRepository.remove(id);
    if(prod){
      return prod;
    }else{
      throw new NotFoundException('Product not found');
    }
  }
}
