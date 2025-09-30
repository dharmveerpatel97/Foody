module.exports = function (api) {
  // Cache based on the environment (e.g., development or production)
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            // '@utils': './src/utils/index',
            '@screens': './src/screens',
            // Uncomment and add other aliases as needed
            // '@assets': './src/assets',
            // '@features': './src/features',
            // '@navigation': './src/navigation',
            // '@unistyles': './src/unistyles',
            // '@services': './src/services',
            // '@states': './src/states',
          },
        },
      ],
      'react-native-reanimated/plugin', // Must be last
    ],
  };
};