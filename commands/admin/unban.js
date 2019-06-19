const Commando = require("discord.js-commando");
const discord = require("discord.js");

class UnbanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "unban",
      group: "admin",
      memberName: "unban",
      description: "Unbans the user specified. <UnBan @Stale Bot"
    });
  }
  async run(message, args) {
    var target = message.guild.member(message.mentions.users.first());
    if (!target) {
      message.channel.send("Couldn't find that user, sorry.");
      return;
    }
    if (!message.member.hasPermission("BAN_USERS")) {
      message.channel.send("You do not have the permissions");
    }
    message.guild
      .member(target)
      .send(
        "You have been unbanned from the Coding Time Server Server! Invite: https://discord.gg/FdNEq97"
      );
    message.guild.unban(target, "Unbanned");
  }
}
module.exports = UnbanCommand;
