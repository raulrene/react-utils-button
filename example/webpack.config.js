/* eslint-disable require-jsdoc-except/require-jsdoc */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        filename: 'example.bundle.js',
        path: path.resolve(__dirname, './bundle/')
    },


    resolve: {
        extensions: ['.js', ',jsx'],
        modules: ['node_modules']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
