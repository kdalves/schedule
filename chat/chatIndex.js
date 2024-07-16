const { Client, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Create a new client instance
const client = new Client({
    webVersionCache: { 
        type: 'none'
    },
    authStrategy: new NoAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR ', qr);
});

client.on('message_create', message => {
	if (message.body === 'Oi') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Tudo bem? ESSA MENSAGEM É DO BOT');
	}
});

// client.on('message_create', message => {
// 	if (message.body === '!ping') {
// 		// reply back "pong" directly to the message
// 		message.reply('pong');
// 	}
// });
// Start your client
client.initialize();
