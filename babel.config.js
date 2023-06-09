module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ... some other plugins
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
        alias: {
          '@tailwind': ['./tailwind.ts'],
          '@components': './src/components',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@routes': './src/routes',
        },
      },
    ],
  ],
};
