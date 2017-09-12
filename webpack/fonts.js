module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|woff|svg)$/,
                    exclude: '/blocks/',
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    },
                },
            ],
        },
    };
}