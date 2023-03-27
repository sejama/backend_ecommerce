import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schema/cart.schema';
import { ProductsModule } from 'src/products/products.module';
import { CartRepository } from './schema/cart.repository';
import { MailModule } from 'src/mail/mail.module';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [
    ProductsModule,
    MailModule,
    UsersModule,
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
  ],
  controllers: [ CartsController ],
  providers: [ CartsService, CartRepository]
})
export class CartsModule {}
