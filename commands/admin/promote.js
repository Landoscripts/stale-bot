const Commando = require('discord.js-commando');
const Discord = require('discord.js')

class PromoteCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'promote',
            group: 'admin',
            memberName: 'promote',
            description: 'Promotes the mentioned user to staff role.'
        })
    }
    async run(message,args)
    {
        message.delete(0);
        var target = message.guild.member(message.mentions.users.first())
        if(target == null){
            message.reply('You need to say who is getting the promotion!')
            return;
        }
        if(message.member.hasPermission('ADMINISTRATOR')){
            var staffRole = message.guild.roles.find(r => r.name === 'Admin');
            target.addRole(staffRole)
            target.send('You have been promoted @' + target + ". WooHoo 😃")
        }else{
            message.reply('You don\'t have the permissions to do that!')
            return;
        }
    }
}
module.exports = PromoteCommand;