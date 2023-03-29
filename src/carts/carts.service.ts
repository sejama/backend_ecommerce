import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { CreateCartDto } from './dto/create-cart.dto';
import { AddItemDto } from './dto/addItem-cart.dto';
import { CartRepository } from './schema/cart.repository';
import { ProductsService } from 'src/products/products.service';
import { MailService } from 'src/mail/mail.service';
import { UsersService } from 'src/users/users.service';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class CartsService {
  constructor(  
    private readonly cartRepository: CartRepository,
    private readonly productsService : ProductsService,
    private readonly mailService: MailService,
    private readonly userService: UsersService,
  ) {}
  
  /**
   * 
   * @param createCartDto 
   * @returns 
   */
  async create(createCartDto: CreateCartDto) {
    if(!isValidObjectId(createCartDto.user_id)){
      throw new NotFoundException()
    }
    const existCart = await this.cartRepository.findOneUser(createCartDto.user_id);
    if (existCart) {
      throw new NotFoundException();
    }else {
       const newcart = await this.cartRepository.create(createCartDto);
        newcart.total = 0;
        newcart.status = "creada";
       const updatecart = await this.cartRepository.update( newcart._id, newcart );
       return updatecart;
    }
  }

  /**
   * 
   * @returns 
   */
  async findAll() {
    return await this.cartRepository.findAll();
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findOne(id: string) {
    const cart = isValidObjectId(id) && await this.cartRepository.findOne(id);
    if (!cart) {
      throw new NotFoundException()
    }
    return cart
  }

  /**
   * 
   * @param id 
   * @param addItemDto 
   * @returns 
   */
  async update(id: string, addItemDto: AddItemDto) {

    const cart = isValidObjectId(id) && await this.cartRepository.findOne(id);
    if(!cart){
      throw new NotFoundException();
    }
    
    const product = isValidObjectId(addItemDto.product_id) &&  await this.productsService.findOne(addItemDto.product_id);
    addItemDto.subtotal = product.price * addItemDto.quantity;
    
    await cart.items.push(addItemDto);

    cart.total = addItemDto.subtotal + cart.total;
    cart.status = "comprando"
    
    const cartupdate = await this.cartRepository.update( cart._id, cart );
    return cartupdate;
  }

  /**
   * 
   * @param id 
   */
  async closeCart(id: string){
    const cart = isValidObjectId(id) && await this.cartRepository.findOne(id);
    if(!cart){
      throw new NotFoundException();
    }
    const user = isValidObjectId(cart.user_id) && await this.userService.findOneById(cart.user_id);
    if(!user){
      throw new NotFoundException();
    }
    cart.status = "cerrada";
    const cartupdate = await this.cartRepository.update( cart._id, cart );
    await this.mailService.sendMailNewBuy(user, cartupdate) ;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async remove(id: string) {
    const cart = isValidObjectId(id) && await this.cartRepository.remove(id);
    if(!cart){
      throw new NotFoundException();
    }
    return cart
  }
}
