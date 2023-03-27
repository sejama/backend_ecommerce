import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Product {
    @Prop({ required: true, index: true })
    title: string;
    
    @Prop()
    description: string;

    @Prop()
    code: string;

    @Prop()
    thumbnail: string;

    @Prop()
    price: number;

    @Prop()
    stock: number;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);