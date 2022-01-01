const { GuildMember, Message, Client, MessageEmbed, TextChannel, Guild, Permissions } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 * @param {MessageEmbed} embed 
 * @param {TextChannel} channel 
 * @param {GuildMember} author 
 * @param {Guild} guild 
 * @param {GuildMember} member
 */

module.exports.operate = async (client, message, args, embed, channel, author, guild, prefix) => {
    if (!args[0]) return channel.send({ content: "kod belirt amcık!" })
    let code = args.join(" ");

    try {
        var result = clean(await eval(code));
        if (result.includes(client.token))
            return channel.send({ content: "sg ocx" });
        channel.send({ content: result, code: "js", split: true });
    } catch (err) {
        channel.send({ content: err, code: "js", split: true });
    }
}

module.exports.info = {
    name: "eval",
    aliases: [],
    owner: true
}