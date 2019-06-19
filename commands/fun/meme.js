const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const superagent = require('superagent');

class MemeCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'meme',
            group: 'fun',
            memberName: 'meme',
            description: 'Shows a random meme!'
        })
    }
    async run(message, args){
        let url = 'https://api.memeload.us/v1/random'
        let {body} = await superagent
        .get(url)
        if(body == null){
            message.channel.send("I broke")
        }
        let pic = new Discord.RichEmbed()
            .setImage(body.image)
        message.channel.send(pic)
    }
}
module.exports = MemeCommand