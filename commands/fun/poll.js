const Commando = require('discord.js-commando');
const Discord = require('discord.js')

class PollCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'poll',
            group: 'fun',
            memberName: 'poll',
            description: 'Ask a yes or no question then put the wait time in PLACEHOLDER'
        })
    }
    async run(message, args){
        message.delete(0);
        if(args.length >= 1){
            var pollEmbed = new Discord.RichEmbed()
                .setTitle(message.author.username + " asks " + args)
                .setAuthor(message.author.username)
            message.channel.send(pollEmbed)
                .then(m => {m.react('✅')
                    m.react('❌')
                    const filter = (reaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❌"
                    m.awaitReactions(filter, { time: 60000 })
                        .then((results) => {console.log(results)
                            var resultEmbed = new Discord.RichEmbed();
                            resultEmbed.setTitle("Poll results for " + args)
                            if(results.find(r=>r.emoji.name == '✅').count - 1 > results.find(r=>r.emoji.name == '❌').count - 1){
                                resultEmbed.setDescription("People say yes!")
                                resultEmbed.setColor('#77b255')
                            } else if(results.find(r=>r.emoji.name == '❌').count - 1 > results.find(r=>r.emoji.name == '✅').count - 1){
                                resultEmbed.setDescription("People say no!")
                                resultEmbed.setColor("#E02D44")
                            }else{
                                resultEmbed.setDescription("People are tied!")
                                resultEmbed.setColor('#ffe500')
                            }
                            message.channel.send(resultEmbed)
                })
                        .catch(e => console.error(e));
                });
        }else{
            var temp1 = message.channel.send(`I need a question to ask ${message.author}`)
            temp1.delete(10000)
        }
    }
}
module.exports = PollCommand;