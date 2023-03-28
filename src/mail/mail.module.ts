import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT),
        ignoreTLS: true,
        secure: true,
        auth: {
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASSWORD
        },
      },
      defaults: {
        from:process.env.MAIL_FROM,
    }  
  }),
],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}