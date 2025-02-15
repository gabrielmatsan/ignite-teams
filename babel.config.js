module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo', // Preset do Expo para lidar com React Native e Expo
    ],
    plugins: [
      [
        'module-resolver', // Plugin para aliasing de módulos
        {
          root: ['./src'], // Define a raiz dos arquivos fonte como a pasta "src"
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};