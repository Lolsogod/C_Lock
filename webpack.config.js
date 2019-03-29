let path = require("path");

let conf = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./js"),
        filename: "main.js",
        publicPath: "/js"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: "eval-sourcemap"
}

// eslint-disable-next-line no-undef
module.exports = (enviroment, options) => {
    let production = options.mode === "production";
    conf.devtool =  production ? 'source-map' : 'eval-sourcemap';
    return conf;
}