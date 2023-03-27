import { Types } from 'mongoose';

export class CartDto {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  items: [{
    product_id: Types.ObjectId,
    quantity: number,
    subtotal: number 
  }];
  total: number;
  status: string;
  

  constructor(props: Partial<CartDto>) {
    this._id = props._id;
    this.user_id = props.user_id || null;
    this.items = props.items;
    this.total = props.total || null;
    this.status = props.status || null;
  }
}