module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@better/screens': './src/screens/index.ts',
          '@better/components': './src/components/index.ts',
          '@better/forms': './src/forms/index.ts',
          '@better/themes': './src/themes/index.ts',
        },
      },
    ],
  ],
};
