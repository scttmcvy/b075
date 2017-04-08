var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: 'xoxb-167199571878-AmW2V4gc7MLzhbNHx0JxEJrn',
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});
