export const transport = {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT),
    ignoreTLS: true,
    secure: true,
    auth: {
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASSWORD
    },
  }
export const defaults= {
      from:process.env.MAIL_FROM,
  } 