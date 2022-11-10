module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './app/assets',
          components: './app/components',
          constant: './app/constant',
          core: './app/core',
          hooks: './app/hooks',
          navigation: './app/navigation',
          screens: './app/screens',
          store: './app/store',
          utils: './app/utils',
        },
        extensions: ['.js', '.ts', '.tsx'],
        root: ['./'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
