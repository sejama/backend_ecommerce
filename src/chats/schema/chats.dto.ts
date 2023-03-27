import { Types } from 'mongoose';

export class ChatDto {
  _id: Types.ObjectId;
  members: Array<Types.ObjectId>;

  constructor(props: Partial<ChatDto>) {
    this._id = props._id || null;
    this.members = props.members || null;
  }
}
