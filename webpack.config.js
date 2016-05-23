"use strict";

const webpack = require('webpack');

module.exports = {
    entry: './public/bin/main.js',
    output: {
        path: './public',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }

}