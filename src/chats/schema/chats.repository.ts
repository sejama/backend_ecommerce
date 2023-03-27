import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatDto } from './chats.dto';

export class ChatsRepository {
  constructor(
    @InjectModel('Chat')
    private chatModel: Model<ChatDto>,
  ) {}
  
  /**
   * 
   * @param chat 
   * @returns 
   */
  async createChat(chat): Promise<any> {
    const createOne = await this.chatModel.create(chat);
    return createOne;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findAllChats(id): Promise<any> {
    const findAll = await this.chatModel.find({ members: { $all: [id] } });
    return findAll;
  }
}