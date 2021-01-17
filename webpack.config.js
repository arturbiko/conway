const Encore = require('@symfony/webpack-encore');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('dist/build')
    .setPublicPath('/build')

    .addEntry('app', './client/app.js')
    .addStyleEntry('style', './client/assets/scss/app.scss')

    .splitEntryChunks()

    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enableSassLoader()
    .enableReactPreset()

    .cleanupOutputBeforeBuild()
;

if (Encore.isDevServer()) {
    Encore
        .addPlugin(new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/src/index.html'),
        }))
}

if (Encore.isProduction()) {
    Encore
        .setPublicPath('build')

        .cleanupOutputBeforeBuild()

        .disableFontsLoader()

        .addPlugin(new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/src/index.html'),
            filename: path.resolve(__dirname + '/dist/index.html')
        }))

        .addLoader({
            test: /\.(ttf|eot|woff2?|otf)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'fonts',
                    publicPath: 'fonts',
                    limit: 10000
                }
            }
        },)
}

const config = Encore.getWebpackConfig();

module.exports = config;
