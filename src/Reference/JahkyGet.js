client = global.client

class Get {
    static async GetUser(userID) {
        if (!userID | isNaN(userID)) return console.log("userID isNaN!");
        const user = client.users.cache.get(userID);
        return user;
    };

    static async GetRole(roleID) {
        if (!roleID | isNaN(roleID)) return console.log("roleID isNaN!");
        const role = client.roles.cache.get(roleID);
        return role;
    };
};

module.exports = Get