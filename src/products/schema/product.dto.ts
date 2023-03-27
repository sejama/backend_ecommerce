import { Types } from 'mongoose';

export class ProductDto {
  _id: Types.ObjectId;
  title: string;
  description: string;
  code: string;
  thumbnail: string;
  price: string;
  stock: string;

  constructor(props: Partial<ProductDto>) {
    this._id = props._id;
    this.title = props.title || null;
    this.description = props.description || null;
    this.code = props.code || null;
    this.thumbnail = props.thumbnail || null;
    this.price = props.price || null;
    this.stock = props.stock || null;
  }
}