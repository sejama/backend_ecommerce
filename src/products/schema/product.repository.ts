import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './product.dto';

export class ProductRepository {
  constructor(
    @InjectModel('Product')
    private productModel: Model<ProductDto>,
  ) {}

  /**
   * 
   * @param product 
   * @returns 
   */
  async create(product): Promise<any> {
    return await this.productModel.create(product);
  }

  /**
   * 
   * @returns 
   */
  async findAll(): Promise<any> {
    return await this.productModel.find();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id): Promise<any> {
    return await this.productModel.findById(id);
  }

  /**
   * 
   * @param id 
   * @param product 
   * @returns 
   */
  async update(id, product): Promise<any> {
    return await this.productModel.findByIdAndUpdate(id, product);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id): Promise<any> {
    return await this.productModel.findByIdAndDelete(id);
  }
}