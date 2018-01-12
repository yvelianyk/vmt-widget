const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "./dist/bundle.js",
        libraryTarget: 'umd',
        library: 'VMTWidget'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015' , 'react', 'stage-2']
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};