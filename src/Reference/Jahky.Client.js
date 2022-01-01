const { Client, Intents, Collection } = require("discord.js");

class jahky extends Client {
    constructor() {
        super({
            intents: [
                Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_WEBHOOKS
            ]
        });
        this.commands = new Collection();
        this.aliases = new Collection();
        this.config = global.config = require("../../config.json");
        global.system = this
    }
};

module.exports = jahky