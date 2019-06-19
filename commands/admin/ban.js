const Commando = require('discord.js-commando');
const discord = require('discord.js')

class BanCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans the user specified. <Ban @Stale Bot'
        })
    }
    async run(message,args)
    {
        var target = message.guild.member(message.mentions.users.first())
        if(!target){
            message.channel.send('Couldn\'t find that user, sorry.')
            return;
        }
        if(!target.bannable){
            message.channel.send('Can\'t ban that user.')
            return;
        }
        if(!message.member.hasPermission('BAN_USERS')){
            message.channel.send('You do not have the permissions')
        }
        let reason = args.split(' ').slice(1).join(' ')
        message.guild.member(target).send('You have been banned for ' + reason)
        message.guild.member(target).ban(reason)
            .then(console.log)
            .catch(console.error)
    }
}
module.exports = BanCommand