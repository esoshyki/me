/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    i18n: {
        locales: ['en-US', 'ru-RU'],
        defaultLocale: 'en-US',
    },
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