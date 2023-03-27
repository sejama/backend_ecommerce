import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Types } from 'mongoose';

export class LoginUserDto{
    _id: Types.ObjectId;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    password: string;

    constructor(props: Partial<LoginUserDto>) {
        this._id = props._id;
        this.email = props.email;
        this.password = props.password;
      }
}
