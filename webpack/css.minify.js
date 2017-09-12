var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function () {
    return {
        plugins: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.min\.css$/,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } }
            })
        ]
    };
}