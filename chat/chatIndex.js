const { Client, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const chatIndex = () => {
    const client = new Client({
        webVersionCache: {
            type: 'none'
        },
        authStrategy: new NoAuth()
    });

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
        console.log('QR ', qr);
    });

    client.on('message_create', (message) => {
        if (message.body === 'Oi') {
            client.sendMessage(message.from, 'Tudo bem? ESSA MENSAGEM É DO BOT');
        }
    });

    client.initialize();
};

module.exports = chatIndex;
