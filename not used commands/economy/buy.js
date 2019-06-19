const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const db = require('quick.db');
// import * as itemData from "./itemData"
let itemData = require('./itemData')

class Buy extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'buy',
            group: 'economy',
            memberName: 'buy',
            description: 'Buys the item passed after.`<buy Book'
        })
    }
    async run(message, args) {
        message.delete(0);

        if (args.length < 1) { return; }
        let newItem = args
        let item = null;
        itemData.itemData.items.forEach(element => {
            if (element.name == newItem) {
                item = element
            }
        })
        if (item === null) {
            message.channel.send('Sorry ' + message.author.username + ', that doesn\'exist')
            return;
        }
        let money = db.get(`${message.author.id}.money`)
        if (money < item.price) {
            message.channel.send(`${message.author.username}, you don't have enough money!`)
            return;
        }
        db.add(`${message.author.id}.money`, -item.price)
        db.push(`${message.author.id}.items`, item)
        message.channel.send(`${message.author.username} bought a ${item.name}`)
    }
}
module.exports = Buy