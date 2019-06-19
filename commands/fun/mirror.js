const Commando = require('discord.js-commando');
const discord = require('discord.js')

class MirrorCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'mirror',
            group: 'fun',
            memberName: 'mirror',
            description: 'Mirrors your avatar!'
        })
    }
    async run(message, args){
        var mirror = new discord.RichEmbed()
            .setImage(message.author.avatarURL)
            .setColor('#186ef7')
            .setFooter('Oh, look at this!')
        message.channel.send(mirror)
    }
}
module.exports = MirrorCommand