const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader',
            },
        ],
    },
    externals: {
        '@angular/core': '@angular/core',
        '@angular/common': '@angular/common',
        '@angular/forms': '@angular/forms',
        '@ng-bootstrap/ng-bootstrap': '@ng-bootstrap/ng-bootstrap',
        'tabby-core': 'tabby-core',
        'tabby-settings': 'tabby-settings',
        'tabby-terminal': 'tabby-terminal',
        'rxjs': 'rxjs',
    },
    mode: 'production',
    target: 'node',
}