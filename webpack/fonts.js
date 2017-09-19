const Path = require('./path.config');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|woff|svg)$/,
                    exclude: Path.source + '/blocks/',
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    },
                },
            ],
        },
    };
}