// const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
// config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
// config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg', 'ts', 'tsx', 'cjs'];
// config.resolver.extraNodeModules = {
//   // Uncomment and adjust aliases as needed
//   // '@assets': path.resolve(__dirname, 'src/assets'),
//   // '@components': path.resolve(__dirname, 'src/components'),
//   // ... other aliases
// };

// module.exports = config;


// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg', 'ts', 'tsx', 'cjs'];

// Optional: path aliases (match your babel.config.js)
config.resolver.extraNodeModules = {
  '@assets': path.resolve(__dirname, 'src/assets'),
  '@components': path.resolve(__dirname, 'src/components'),
  // '@features': path.resolve(__dirname, 'src/features'),
  // '@navigation': path.resolve(__dirname, 'src/navigation'),
  // '@unistyles': path.resolve(__dirname, 'src/unistyles'),
  // '@services': path.resolve(__dirname, 'src/services'),
  // '@states': path.resolve(__dirname, 'src/states'),
  // '@utils': path.resolve(__dirname, 'src/utils'),
};

module.exports = config;
