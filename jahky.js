const Login = require("./src/Reference/Login");
const Loaders = require("./src/Reference/Load");
const Jahky = require("./src/Reference/Jahky.Client");
global.client = new Jahky()

// system requred \\

Login.On();
Loaders.LoadCommands("./src/commands");
Loaders.LoadEvents("./src/events");