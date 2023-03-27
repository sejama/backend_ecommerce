import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Cart } from 'src/carts/schema/cart.schema';
import { User } from 'src/users/schema/user.schema';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  /**
   * 
   * @param user 
   */
  async sendMailNewUser(user: User) {
    const mail = await this.mailerService.sendMail({
        to: user.email,
        subject: `Nuevo Registro`,
        html: `<h1 style="color: blue;">Hola ${user.firstname} ${user.lastname}!!! te damos la bienvenida al sistema backend ecommerce!!!</h1>`,
    })
  }

  async sendMailNewBuy(user: User, cart: Cart) {
    const mail = await this.mailerService.sendMail({
        to: user.email,
        subject: `Nueva Compra`,
        html: `<h1>Hola ${user.firstname} ${user.lastname}!!!</h1> 
        <h2>Gracias por tu compra!!!</h2>
        cart: ${JSON.stringify(cart)}`
    })
  }
}