const Commando = require('discord.js-commando');
const Discord = require('discord.js')

class DemoteCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'demote',
            group: 'admin',
            memberName: 'demote',
            description: 'Demotes the mentioned user from staff role.'
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
        //if(message.member.roles)
        if(message.member.hasPermission('ADMINISTRATOR')){
            var staffRole = message.guild.roles.find(r => r.name === 'Admin');
            target.removeRole(staffRole)
            target.send('You have been demoted @' + target + ". You bad person.")
        }else{
            message.reply('You don\'t have the permissions to do that!')
            return;
        }
    }
}
module.exports = DemoteCommand;