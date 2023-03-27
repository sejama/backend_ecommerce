import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDto } from './message.dto';

export class MessagesRepository {
  constructor(
    @InjectModel('Message')
    private messageModel: Model<MessageDto>,
  ) {}

  /**
   * 
   * @param message 
   * @returns 
   */
  async createMessage(message): Promise<any> {
    const createOne = await this.messageModel.create(message);
    return createOne;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findAllMessages(id): Promise<any> {
    const findAll = await this.messageModel.find({ chat_id: { $all: [id] } });
    return findAll;
  }
}