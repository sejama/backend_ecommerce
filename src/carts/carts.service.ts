import { DatabaseService } from '@app/database';
import { Cart } from '@app/database/schemas/cart.schema';
import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(private database: DatabaseService) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const newProduct =  await this.database.Cart().create(createCartDto)
    return newProduct;
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cart`;
  }

  async update(id: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    const updateCart = await this.database.Cart().update(id, updateCartDto)
    return updateCart;
  }

  remove(id: string) {
    return `This action removes a #${id} cart`;
  }
}
