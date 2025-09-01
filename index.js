const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const kau_deaths = "120363043485924996@g.us";
const my_senderId = "966593322213@c.us";

// Create a new client instance
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: 'auth_info'
    })
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
    // sendAutomatedMessages(client, kau_deaths);
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});


// Commands
const tagAllCommand = require("./comm/tagAllCommand");
const tagHidden = require("./comm/tagHidden");
const sendAutomatedMessages = require("./comm/sendAutomatedMessages");
const keep_alive = require("./comm/keep_alive");
// Listening to all incoming messages
// client.on('message_create', message => {
    // 	console.log(message.body);
    // });
    
    // Handle messages
    
    client.on('message_create', async (message) => {
        // if (!message.fromMe) return;
        
        // if (message.from.endsWith('@g.us')) {
        // console.log('Group ID:', message.from);
        // console.log('Group Name:', (message._data && message._data.notifyName) || 'Unknown');
        // }

        // console.log('Sender ID:', message.from);
        // console.log('Phone number:', message.from.split('@')[0]);


        
        if (message.body === '!ping') {
            // reply back "pong" directly to the message
            message.reply('pong');
        }
        if (message.body === "!all") {
            await tagHidden(client, message.from, message.author || message.from);
        }
        
    });
    
   
   
    // Start your client
    client.initialize();