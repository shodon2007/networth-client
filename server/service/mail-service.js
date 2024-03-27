const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }
    async sendActivationMail(email, link) {
        console.log('отправление на почту', email);
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Активация аккаунта networth',
            text: '',
            html: `
                <div>
                    <h1>Для активации аккаунта перейдите по ссылке</h1>
                    <a href='${link}'>${link}</a>
                </div>
            `
        });
        console.log('на почту усшен')
    }
}

module.exports = new MailService();