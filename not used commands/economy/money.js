const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const db = require('quick.db');

class MoneyCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'money',
            group: 'economy',
            memberName: 'money',
            description: 'Displays the users money!'
        })
    }
    async run(message, args){
        message.delete(0)
        let money = await db.get(`${message.author.id}.money`)

        let moneyEmbed = new Discord.RichEmbed({
            title:`${message.author.username}'s money`,
            description:`${message.author.username} has $${money}`,
        })
            .setColor([120,255,120])
        message.channel.send(moneyEmbed)
    }
}
module.exports = MoneyCommand