// index.js
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Tạo bot Discord
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Khi bot đã online
client.once('ready', () => {
    console.log(`🤖 Bot đã online với tên: ${client.user.tag}`);
});

// Simple reply test (có thể bỏ nếu chỉ cần online)
client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply('pong 🏓');
    }
});

// Endpoint để giữ cho Render không ngủ
app.get("/", (req, res) => {
    res.send("Bot is alive! ✅");
});

// Khởi động server Express
app.listen(PORT, () => {
    console.log(`🌐 Keep-alive server chạy tại http://localhost:${PORT}`);
});

// Đăng nhập bot
client.login(process.env.TOKEN);
