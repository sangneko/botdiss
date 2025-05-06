const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Tạo client Discord
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// Khi bot online
client.once('ready', () => {
    console.log(`✅ Bot đã online: ${client.user.tag}`);
});

// Endpoint HTTP đơn giản
app.get("/", (req, res) => {
    res.send("Bot is alive!");
});

// Khởi động server Express
app.listen(PORT, () => {
    console.log(`🌐 Keep-alive server chạy tại cổng ${PORT}`);
});

// Đăng nhập bot
client.login(process.env.TOKEN);
