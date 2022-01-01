const { Message, MessageEmbed } = require("discord.js");
const config = require("../../config.json");

/**
 * @param {Message} message
 */

module.exports.operate = async (message) => {
    const client = message.client
    const prefix = config.bot.prefix.find((x) => message.content.toLowerCase().startsWith(x));
    if (!prefix || !message.guild || message.author.bot) return
    const args = message.content.slice(1).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
    const owner = client.users.cache.get("618444525727383592");
    const author = message.author
    const channel = message.channel
    const guild = message.guild
    const embed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setAuthor(message.member.displayName)
        .setFooter("Developed By Jahky.", owner.avatarURL({ dynamic: true }))
    if (command) {
        if (command.info.owner && !config.bot.owners.includes(author.id)) return
        if (command.info.GuildOwner && !config.bot.owners.includes(author.id) && guild.ownerId !== author.id) return
        command.operate(client, message, args, embed, author, channel, guild, prefix);
    }
}

module.exports.info = {
    name: "messageCreate"
}
