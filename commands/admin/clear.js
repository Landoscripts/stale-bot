const Commando = require('discord.js-commando');
const discord = require('discord.js')

class ClearCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'clear',
            group: 'admin',
            memberName: 'clear',
            description: 'Clears messages'
        })
    }
    async run(message, args){
        message.delete();
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            message.channel.send('You don\'t have the permission')
                .then(msg => {
                    msg.delete(5000)
                })
            return;
        }

        if(!args[0]){
            message.channel.send('You have to say how many messages to delete!')
                .then(msg => {
                    msg.delete(5000)
                })
            return;
        }

        let numToDelete = Number(args[0])
        if(numToDelete == NaN){
            message.channel.send('You have to put a number after the command!')
                .then(msg => {
                    msg.delete(5000)
                })
            return;
        }
        numToDelete =  Math.round(numToDelete)
        message.channel.bulkDelete(numToDelete)
            .catch(console.error)
    }
}
module.exports = ClearCommand