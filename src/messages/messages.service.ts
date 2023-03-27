import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesRepository } from './schema/message.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  /**
   * 
   * @param createMessageDto 
   * @returns 
   */
  async createMessage(createMessageDto: CreateMessageDto) {
    return await this.messagesRepository.createMessage(createMessageDto);
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findAllMessages(id: string) {
    return await this.messagesRepository.findAllMessages(id);
  }
}