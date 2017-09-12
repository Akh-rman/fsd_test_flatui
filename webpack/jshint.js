module.exports = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "jshint-loader",
                    enforce: 'pre',
                    options: {
                        camelcase: true,
                        emitErrors: true,
                        failOnHint: false,
                        curly: true,
                        asi: true,
                    }
                }
            ]
        },
    };
};