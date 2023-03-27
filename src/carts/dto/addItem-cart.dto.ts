import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddItemDto{
    @ApiProperty()
    @IsString()
    product_id: string;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    quantity: number;

    subtotal: number;
}
