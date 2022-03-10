/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp3|wav)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/sounds/',
                    outputPath: 'static/sounds/',
                    name: '[name].[ext]',
                    esModule: false,
                },
            },
        });
        return config
    },
}