const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = injectBabelPlugin(
        //['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    );
    config = rewireLess.withLoaderOptions({
        modifyVars: { 
            "@primary-color": "#f3f1f1",
            "@menu-dark-item-active-bg":"#212121",
        },
        javascriptEnabled: true,
    })(config, env);
    return config;
}