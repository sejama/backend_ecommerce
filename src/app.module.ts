import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartsModule } from './carts/carts.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { AppGateway } from './app.gateway';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    ProductsModule,
    CartsModule,
    ChatsModule,
    MessagesModule,
  ],
  
})
export class AppModule {}
