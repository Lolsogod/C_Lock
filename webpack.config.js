let path = require("path");

let conf = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./js"),
        filename: "main.js"
    }
}

// eslint-disable-next-line no-undef
module.exports =conf;