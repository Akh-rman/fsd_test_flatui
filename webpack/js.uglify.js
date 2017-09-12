const webpack = require('webpack');

module.exports = function () {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                test: /\.min.js$/,
                compress: {
                    warnings: false
                }
            }),
        ]   
    }
};