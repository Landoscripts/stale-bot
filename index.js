// Made by LandoScripts!
// setup (VERY IMPORTANT)
var fs = require("fs");
const Commando = require("discord.js-commando");
var ConfigData = fs.readFileSync(__dirname + "/config.json");
var Config = JSON.parse(ConfigData);
const TOKEN = Config.token;
const bot = new Commando.Client();
const discord = require("discord.js");
const Canvas = require("canvas");

// Sets the prefix
bot.commandPrefix = Config.prefix;

// registers command groups
bot.registry.registerGroup("fun", "Fun");
bot.registry.registerGroup("admin", "Admin");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};
const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");

  // Declare a base size of the font
  let fontSize = 70;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 300);

  // Return the result to use in the actual canvas
  return ctx.font;
};

// Happens when somebody joins
bot.on("guildMemberAdd", async function(member) {
  const channel = member.guild.channels.find(ch => ch.name === "welcome");
  if (!channel) return;

  member.addRole("589658172227059722");

  member.send("Welcome to Coding Time! For commands use `<help`");

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const bgImg = await Canvas.loadImage("./background.png");
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    "Welcome to the server,",
    canvas.width / 2.5,
    canvas.height / 3.5
  );

  // Select the font size and type from one of the natively available fonts
  ctx.font = applyText(canvas, member.displayName);
  // Select the style that will be used to fill the text in
  ctx.fillStyle = "#ffffff";
  // Actually fill the text with a solid color
  ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);
  ctx.beginPath();
  // Start the arc to form a circle
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  // Put the pen down
  ctx.closePath();
  // Clip off the region you drew on
  ctx.clip();
  const avatar = await Canvas.loadImage(member.user.avatarURL);
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new discord.Attachment(
    canvas.toBuffer(),
    "welcome-image.png"
  );

  channel.send(`Welcome to the server, ${member.displayName}!`, attachment);
});

bot.on("message", message => {
  if (message.content === "<FakeJoin") {
    bot.emit("guildMemberAdd", message.member); // || await message.guild.fetchMember(message.author));
  }
});

// notify when ready
bot.on("ready", () => {
  console.log("Bot is ready");
  bot.user.setActivity("The voices in Stale's head", { type: "LISTENING" });
});

// turn online
bot.login(TOKEN);
// my id:429028362116136962
