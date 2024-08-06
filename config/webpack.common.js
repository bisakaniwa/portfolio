const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, '../dist'),
   },
   resolve: {
      extensions: ['.js', '.jsx', '.html', '.json'],
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime'],
               },
            },
         },
         {
            test: /\.html$/,
            use: ['html-loader'],
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './public/index.html',
         minify: process.env.NODE_ENV === 'development' ? false : true,
      }),
   ]
};