const Encore = require('@symfony/webpack-encore');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

const indexOutputConfiguration = Object.assign(
    {},
    {template: path.resolve(__dirname + '/index.html')},
    Encore.isProduction()
        ? {filename: path.resolve(__dirname + '/public/index.html')}
        : {}
);

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('app', './client/app.js')
    .addStyleEntry('style', './client/assets/scss/app.scss')

    .addPlugin(new HtmlWebpackPlugin(indexOutputConfiguration))

    .splitEntryChunks()

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
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

const config = Encore.getWebpackConfig();

module.exports = config;
