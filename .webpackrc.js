const path = require('path');

export default {
  entry: 'src/index.ts',
  extraBabelPlugins: [
    [ 'import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }, 'antd'
  ],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};
