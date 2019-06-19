const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const db = require('quick.db');
// import * as itemData from "./itemData"
let itemData = require('./itemData')
let bookEmbed1;
let bookEmbed2;
let bookEmbed3;
let bookEmbed4;
let bookEmbed5;

function hasItem(item, message){
    let itemArr = db.get(`${message.author.id}.items`)
    for(let i = 0; i < itemArr.length; i++){
        if(db.get(`${message.author.id}.items[${i}].name`) === item.name){
            return true;
        }
    }
}

class Buy extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'use',
            group: 'economy',
            memberName: 'use',
            description: 'Uses an item in your inventory.`<use Book'
        })
    }
    async run(message, args) {
        message.delete(0);

        if (args.length < 1) { return; }
        let itemToUse = args
        let item = null;
        itemData.itemData.items.forEach(element => {
            if (element.name == itemToUse) {
                item = element
            }
        })
        if (item === null) {
            message.channel.send('Sorry ' + message.author.username + ', that doesn\'exist')
            return;
        }
        // console.log(db.get(`${message.author.id}.items`))
        if(item.name === "Book" && hasItem('Book', message)){
            // console.log(item)
            bookEmbed1 = new Discord.RichEmbed()
                .setTitle(item.book.title)
                .setDescription(item.book.body)
            bookEmbed2 = new Discord.RichEmbed()
                .setDescription(item.book.body2)
            bookEmbed3 = new Discord.RichEmbed()
                .setDescription(item.book.body3)
            bookEmbed4 = new Discord.RichEmbed()
                .setDescription(item.book.body4)
            bookEmbed5 = new Discord.RichEmbed()
                .setDescription(item.book.body5)
            message.channel.send(bookEmbed1)
            message.channel.send(bookEmbed2)
            message.channel.send(bookEmbed3)
            message.channel.send(bookEmbed4)
            message.channel.send(bookEmbed5)
        } else{
            message.channel.send('I don\'t know how to use this!')
        }
        
    }
}
module.exports = Buy