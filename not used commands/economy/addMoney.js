const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const db = require('quick.db');

class AddMoney extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'addmoney',
            group: 'economy',
            memberName: 'addmoney',
            description: 'Adds a scpecified amount of money to the mentioned user!(<addmoney @Username)'
        })
    }
    async run(message, args){
        message.delete(0)
        if(args == 0){
            message.channel.send('I don\'t know how much to add!')
            return;
        }
        // if(args.mentions )
        console.log(args.mentions)
        return;love
        try{
            args = parseInt(args)
        }
        catch(err){
            message.channel.send(err.message)
            return;
        }
        let money = await db.get(`${message.author.id}.money`)

        let moneyEmbed = new Discord.RichEmbed({
            title:`${message.author.username}'s money`,
            description:`${message.author.username} has $${money}`,
        })
            .setColor([120,255,120])
        message.channel.send(moneyEmbed)
    }
}
module.exports = AddMoney