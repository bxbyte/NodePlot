const { merge } = require("webpack-merge"),
    config = require("./webpack.config"),
    { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(config, {
    mode: "development",
    plugins: [
        new CleanWebpackPlugin() // Clear docs before bundle
    ]
});