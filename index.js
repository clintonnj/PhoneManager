const Botgram = require('botgram');
const figlet = require('figlet');

const { TELEGRAM_BOT_TOKEN } = "7734993043:AAGt1_kNaJrqCnH-OOWyZOtmwq-_38QkCBk";


const bot = new Botgram("7734993043:AAGt1_kNaJrqCnH-OOWyZOtmwq-_38QkCBk");

function onMessage(msg, reply) {
  figlet(msg.text, (err, data) => {
    if (err) {
      reply.text('An error occured. Probably text format is not correct.').then();
      return;
    }
    const markdownResult = `${'```\n'}${data}${'\n```'}`;
    reply.markdown(markdownResult).then();
  });
}

bot.text(onMessage);
