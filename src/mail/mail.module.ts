import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { defaults, transport } from './mail.config';
import { MailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from 'src/products/products.module';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.MAIL_PORT) || 465,
        ignoreTLS: true,
        secure: true,
        auth: {
            user:process.env.MAIL_USER || 'sejama3@gmail.com',
            pass:process.env.MAIL_PASSWORD ||'eqlwmatsmspgrkmm'
        },
      },
      defaults: {
        from:process.env.MAIL_FROM || 'sejama3@gmail.com',
    }  
  }),
],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}