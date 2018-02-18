var webpack = require("webpack")

module.exports = {

    entry: "./index.jsx",
    output: {
        filename: "./build/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
}