const { Telegraf } = require('telegraf');
const TOKEN = "6250735543:AAFHT7rlWZN-yvFiIhHM-lOHFdK6ngLcZxo";
const bot = new Telegraf(TOKEN);

const web_link = "https://gabrielcfigueiredo.github.io/botSoker/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();