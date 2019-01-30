const pkg = require('./package.json');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['./src/component.js'],
    output: {
        library: pkg.name,
        libraryTarget: 'umd',
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                "chrome": "60",
                                "safari": "11",
                                "ie": "11"
                            },
                            modules: false,
                            useBuiltIns: "entry"
                        }]
                    ],
                    plugins: [
                        "@babel/plugin-transform-arrow-functions",
                        ["@babel/plugin-proposal-class-properties", {
                            "loose": true
                        }],
                    ]
                }
            },
        ],
    }
}