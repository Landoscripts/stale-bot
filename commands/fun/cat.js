const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const superagent = require('superagent');

class CatCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'cat',
            group: 'fun',
            memberName: 'cat',
            description: 'Shows a random cat!'
        })
    }
    async run(message, args){
        let url = 'http://aws.random.cat/meow'
        let {body} = await superagent
        .get(url)

        let pic = new Discord.RichEmbed()
            .setImage(body.file)
        message.channel.send(pic)
    }
}
module.exports = CatCommand