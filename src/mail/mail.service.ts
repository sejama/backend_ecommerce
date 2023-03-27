import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Cart } from 'src/carts/schema/cart.schema';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/schema/user.schema';


@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly productsService : ProductsService,
    ) {}


  /**
   * 
   * @param user 
   */
  async sendMailNewUser(user: User) {
    const mail = await this.mailerService.sendMail({
        to: [user.email, process.env.MAIL_FROM],
        subject: `Nuevo Registro`,
        html: `<h1 style="color: blue;">Hola ${user.firstname} ${user.lastname}!!! te damos la bienvenida al sistema backend ecommerce!!!</h1>`,
    })
  }

  async sendMailNewBuy(user: User, cart: Cart) {
    let items = `
    <style>table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
    </style>
    <table><tr><th>Producto</th><th>Cantidad</th><th>Subtotal</th></tr>` 
    for (let index = 0; index < cart.items.length; index++) {
      const element = cart.items[index];
      const prod = await this.productsService.findOne(element.product_id.toString())
      items += `<tr><td>${prod.title}</td><td>${element.quantity}</td><td>$ ${element.subtotal}</td></tr>` 
    }
    items += `</table>`
    const mail = await this.mailerService.sendMail({
        to: user.email,
        subject: `Nueva Compra`,
        html: `<h1>Hola ${user.firstname} ${user.lastname}!!!</h1> 
        <h2>Detalle de tu compra:</h2>
        ${items}
        <h3>Total: $${cart.total}</h3>
        <h3>Muchas gracias por tu compra!!!</h3>
        `
    })
  }
}