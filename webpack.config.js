const path = require('path');

module.exports = {
  entry: {
      app: ['./app/src/app.js'],
      admin: ['./app/src/admin.js'],
      'a-lines': ['./app/pages/Animations/pages/lines/lines.js'],
      'a-jelly': ['./app/pages/Animations/pages/jelly/jelly.js'],
      'a-gradient': ['./app/pages/Animations/pages/gradient/gradient.js'],
      'a-other': ['./app/pages/Animations/pages/other/other.js'],
      'a-velocity': ['./app/pages/Animations/pages/velocity/velocity.js'],
      'a-charts': ['./app/pages/Animations/pages/charts/charts.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                outputPath: '../dist',
                name: '[name].css',
            },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  }
};