const Commando = require('discord.js-commando');

class CoinFlipCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'flip',
            group: 'fun',
            memberName: 'flip',
            description: 'Flips a coin. Lands on either heads or tails!'
        })
    }
    async run(message, args){
        var flip = Math.floor(Math.random()*2)
        if (flip == 0) return message.channel.send("Your coin landed on heads!")
        else return message.channel.send("Your coin landed on tails!")
    }
}
module.exports = CoinFlipCommand