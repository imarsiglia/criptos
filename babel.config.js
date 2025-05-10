module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@config": "./src/config",
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@context": "./src/context",
          "@assets": "./src/assets",
          "@navigation": "./src/navigation",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@store": "./src/store",
          "@api": "./src/api",
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
