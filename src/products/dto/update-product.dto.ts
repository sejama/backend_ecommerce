/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsDate, IsNotEmpty, IsString, Length, Min, IsNumber } from 'class-validator'; //@nestjs/class-validator
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
export class UpdateProductDto extends PartialType(CreateProductDto) {
    _id: Types.ObjectId;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 5)
  codigo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  foto: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  stock: number;
}
