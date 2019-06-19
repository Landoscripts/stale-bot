const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const superagent = require('superagent');

class DogCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'dog',
            group: 'fun',
            memberName: 'dog',
            description: 'Shows a random dog!'
        })
    }
    async run(message, args){
        let url = 'https://dog.ceo/api/breeds/image/random'
        let {body} = await superagent
        .get(url)
        if(body == null){
            message.channel.send("I broke")
        }
        let pic = new Discord.RichEmbed()
            .setImage(body.message)
        message.channel.send(pic)
    }
}
module.exports = DogCommand