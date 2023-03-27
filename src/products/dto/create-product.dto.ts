import { IsDate, IsNotEmpty, IsString, Length, Min, IsNumber } from 'class-validator'; //@nestjs/class-validator
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 5)
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  stock: number;
}
