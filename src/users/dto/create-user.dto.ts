import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
//import { Role } from './../../auth/enums/role.enum';
export class CreateUserDto {
    _id: Types.ObjectId;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    username:string;
    
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

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    direccion: string;

    //roles: Role[];

    constructor(props: Partial<CreateUserDto>) {
        this._id = props._id;
        this.email = props.email || null;
        this.password = props.password || null;
        this.username = props.username || null;
        this.direccion = props.direccion || null;
      }
}