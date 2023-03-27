import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Chats')
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post('create-chat')
  @ApiResponse({
    status: 201,
    description: 'The chat has been successfully created.',
  })
  async createChat(@Body() createChatDto: CreateChatDto) {
    return await this.chatsService.createChat(createChatDto);
  }

  @Get(':id')
  async getAllChatsByUserId(@Param(':id') id: string) {
    return await this.chatsService.findAllChats(id);
  }
}