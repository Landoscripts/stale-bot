const Commando = require('discord.js-commando');

class LeaveVoiceChannelCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel the bot is in.'
        })
    }
    async run(message, args){
    //     // if(message.member.voiceChannel){
    //         if(message.guild.voiceConnection){
    //             message.member.voiceChannel.leave()
    //         }else{
    //             message.channel.send('I am already gone!')
    //         }
    //     //} else{
    //     //     message.channel.send("You must be in a voice channel for me to follow!")
    //     // }
        message.channel.send('Sorry! Heroku breaks this command')
    }
}
module.exports = LeaveVoiceChannelCommand