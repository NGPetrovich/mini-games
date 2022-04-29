module.exports = function (config) {
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
