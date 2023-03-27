import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateChatDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  members: Array<Types.ObjectId>;

  constructor(props: Partial<CreateChatDto>) {
    this.members = props.members || null;
  }
}
