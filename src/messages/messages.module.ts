import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from '@app/database';

@Module({
  imports:[DatabaseModule],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
