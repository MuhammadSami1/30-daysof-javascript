// webpack.config.mjs
import path from 'path';

export default {
    entry: {
        main: './Day13-Modules.js',
        additional: './Day13.5-ImortModules.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
