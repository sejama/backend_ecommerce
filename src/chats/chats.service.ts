import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatsRepository } from './schema/chats.repository';

@Injectable()
export class ChatsService {
  constructor(
    private readonly chatsRepository: ChatsRepository,
    private readonly userService: UsersService
    ) {}

  /**
  * 
  * @param createChatDto 
  * @returns 
  */
  async createChat(createChatDto: CreateChatDto) {
    const datos = createChatDto.members
    console.log(datos.length)
    for (let index = 0; index < datos.length; index++) {
      console.log(datos[index])
      const userfind = await this.userService.findOneById(datos[index])
      console.log(userfind)
      
      if(userfind){
        throw new NotFoundException('User not found');
      }else{
        return await this.chatsRepository.createChat(createChatDto);
      }
    }
    
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async findAllChats(id: string) {
    return await this.chatsRepository.findAllChats(id);
  }
}