const Commando = require('discord.js-commando');
// const YTDL = require('ytdl-core')

// function Play(connection, message){
//     let server = servers[message.guild.id]
//     server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter:'audioonly'}))
//     server.queue.shift()
//     server.dispatcher.on('end', () => {
//         if(server.queue[0]){
//             Play(connection, message)
//         } else{
//             connection.disconnect();
//         }
//     })
// }

class JoinVoiceChannelCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel you are in.'
        })
    }
    async run(message, args){
        // if(message.member.voiceChannel){
        //     if(message.guild.voiceConnection){
        //         message.channel.send('Sorry @' + message.authur.username + ". I am already with somebody else right now!")
        //     }else{
        //         if(!servers[message.guild.id]){
        //             servers[message.guild.id] = {queue:[]}
        //         }
        //         let server = servers[message.guild.id]
        //         message.member.voiceChannel.join()
        //             .then(connection => {
        //                 let server = servers[message.guild.id]
        //                 server.queue.push(args)
        //                 Play(connection, message)
        //             })
        //             .catch((err) => {
        //                 console.log("Error: " + err)
        //             })
        //     }
        // } else{
        //     message.channel.send("You must be in a voice channel for me to follow!")
        // }

        message.channel.send('Sorry! Heroku breaks this command')
    }
}
module.exports = JoinVoiceChannelCommand