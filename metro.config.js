const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Exclude .mjs files to prevent Metro from picking up Zustand's ESM build
config.resolver.sourceExts = config.resolver.sourceExts.filter(
  (ext) => ext !== "mjs",
);

module.exports = config;
