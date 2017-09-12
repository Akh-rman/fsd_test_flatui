const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function () {
    return {
        plugins: [
            new CopyWebpackPlugin([
                {from: './src/index.html', to: './index.html' }
            ])
        ]
    };
};