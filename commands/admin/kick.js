const Commando = require('discord.js-commando');
const discord = require('discord.js')

class KickCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks the user specified. <kick @Stale Bot'
        })
    }
    async run(message,args)
    {
        var target = message.guild.member(message.mentions.users.first())
        if(!target){
            message.channel.send('Couldn\'t find that user, sorry.')
            return;
        }
        if(!target.kickable){
            message.channel.send('Can\'t kick that user.')
            return;
        }
        if(!message.member.hasPermission('KICK_USERS')){
            message.channel.send('You do not have the permissions')
        }
        let reason = args.split(' ').slice(1).join(' ')
        message.guild.member(target).send('You have been kicked for ' + reason)
        message.guild.member(target).kick(reason)
            .then(console.log)
            .catch(console.error)
    }
}
module.exports = KickCommand