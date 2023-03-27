import { IsEmail, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @MaxLength(32)
  @IsString()
  username: string;
/*
  @ApiProperty()
  @IsEmail()
  @IsString()
  email: string;
*/
  @ApiProperty()
  @IsString()
  password: string;
}