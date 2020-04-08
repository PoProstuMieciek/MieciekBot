const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if(args[0] == "server")
    {
        let message = new Discord.RichEmbed()
        .setTitle(`INFO: ${msg.guild.name}`)
        .setThumbnail(`${msg.guild.iconURL}`)
        .addField(`Owner:`, `${msg.guild.owner.user.tag}`)
        .addField(`Created at:`, `${msg.guild.owner.joinedAt.toDateString()}`)
        .addField(`Members:`, `${msg.guild.memberCount}`)
        .setFooter(`Powered by MieciekBot ${bot.settings.version}`, bot.settings.iconURL);

        msg.channel.send(message);
    }
    else if(args[0] == "bot")
    {
        let message = new Discord.RichEmbed()
        .setTitle(`INFO: MieciekBot`)
        .setThumbnail(bot.settings.iconURL)
        .addField(`Author:`, `PoProstuMieciek`)
        .addField(`Version:`, `${bot.settings.version}`)
        .addField(`GitHub repository:`, `${bot.settings.repository}`)
        .setFooter(`Powered by MieciekBot ${bot.settings.version}`, bot.settings.iconURL);

        msg.channel.send(message);
    }
    else
    {
        msg.delete(bot.delete_timeout);
    }
}

module.exports.help = {
    name: "info",
    aliases: [
        "i",
        "informations"
    ],
    args: [
        "<server/bot>"
    ],
    permission: "USER",
    description: "prints info about server or bot"
}