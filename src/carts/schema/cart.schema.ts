import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTypes } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Cart {
    @Prop({  required: true, index: true, ref: 'User', type: SchemaTypes.ObjectId })
    user_id: Types.ObjectId;
    
    @Prop()
    items: [{
        product_id: Types.ObjectId,
        count: number,
        subtotal: number 
      }];

    @Prop()
    total: number;

    @Prop()
    status: string;
}

export type CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);