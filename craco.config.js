const { getLoader, loaderByName, } = require('@craco/craco');
const lessPlugin = require('craco-less');
const transformBabelLoader = require('./transformBabelLoader');

module.exports = {
    plugins: [{ plugin: lessPlugin }],
    webpack: {
        configure: (webpackConfig) => {
            const lm = getLoader(webpackConfig, loaderByName('babel-loader'));
            const loader = lm.match.loader;
            webpackConfig.module.rules[2].oneOf[1] = transformBabelLoader(loader);
            return webpackConfig;
        }
    },
};
