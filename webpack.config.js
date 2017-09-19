const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const babel = require('./webpack/bable');
const devserver = require('./webpack/devserver');
const css = require('./webpack/css');
const cssMinify = require('./webpack/css.minify');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const uglifyJS = require('./webpack/js.uglify');
const copyHTML = require('./webpack/html.copy');
const jshint = require('./webpack/jshint');
const PATHS = require('./webpack/path.config');

const common = merge([
    {
        entry: {
            'main': PATHS.source + '/app.js',
            'main.min': PATHS.source + '/app.js',
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.source + '/index.html'
            })
        ]
    },
    images(),
    jshint(),
    babel(),
    fonts()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            {
                entry: {
                    'main.min': PATHS.source + '/app.js',
                },
                output: {
                    path: PATHS.build,
                    filename: 'js/[name].js'
                },
                plugins: [
                    new CleanWebpackPlugin([PATHS.build])
                ]
            },
            common,
            extractCSS(),
            copyHTML(),
            cssMinify(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ])
    }
};