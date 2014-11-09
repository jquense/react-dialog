'use strict';
var configs = require('./webpack.configs')
  , WebpackDevServer = require("webpack-dev-server")
  , webpack = require('webpack');

module.exports = {

  devServer: function() {

    new WebpackDevServer(webpack(configs.dev), {
      publicPath: "/dev",
      stats: { colors: true }
    }).listen(8080, "localhost");

  }
}

