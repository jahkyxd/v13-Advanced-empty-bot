const { Client } = require("discord.js");

/**
 * @param {Client} client
 */

module.exports.operate = async client => {
    client.user.setPresence({ activities: [{ name: "developed by jahky.", type: "LISTENING" }], status: "dnd" });
}

module.exports.info = {
    name: "ready"
}