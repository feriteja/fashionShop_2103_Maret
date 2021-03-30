module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          reduxAct: './src/config/redux/actions',
          myComponents: './src/components',
          myFunction: './src/utils/functions',
          myAssets: './src/assets',
          myColors: './src/assets/theme',
          myScreens: './src/screens',
          myUtils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
