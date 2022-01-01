const config = require("../../config.json");
const mongoose = require("mongoose")

class Login {
    static async On() {
        global.client
            .login(config.bot.token)
            .then(x => console.log(`${global.client.user.username} olarak discord API bağlantısı kuruldu.`))
            .catch(err => console.log("Discord API Botun tokenini doğrulayamadı."));
            
        mongoose.connect(config.bot.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(x => console.log("[MONGO] Mongoose veri tabanına bağlanıldı!"))
            .catch(err => console.log(`[MONGO] Mongoose veri tabanına bağlanırken bir hata ile karşılaşıldı! Hata: ${err}`));
    };
};

module.exports = Login