const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const db = require('quick.db');

class AddItemCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'showitems',
            group: 'economy',
            memberName: 'showitems',
            description: 'Show users items and adds the one described.'
        })
    }
    async run(message, args){
        message.delete(0);

        // let items = db.get(message.author.id + '.items')
        // let itemEmbed = new Discord.RichEmbed()
        //     .setTitle(`${message.author.username}'s items!`)
        // for(let i = 0; i < items.length; i++){
        //     itemEmbed.addField(items[i].name, items[i].description, true)
        //     console.log(items[i])
        // }
        // message.channel.send(itemEmbed)
        message.channel.send('This command is broken and im not sure why. ;(')
            .delete(5000)
    }
}
module.exports = AddItemCommand