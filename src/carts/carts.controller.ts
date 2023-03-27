import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CartsService } from './carts.service';
import { AddItemDto } from './dto/addItem-cart.dto';
import { CreateCartDto } from './dto/create-cart.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Carts')
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartsService.create(createCartDto);
  }

  @Post(':id')
  closeCart(@Param('id') id: string) {
    return this.cartsService.closeCart(id);
  }
  
  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(id);
  }

  @Patch('/additem/:id')
  update(@Param('id') id: string, @Body() addItemDto: AddItemDto) {
    return this.cartsService.update(id, addItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(id);
  }
}
