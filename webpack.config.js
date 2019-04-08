const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HandlebarsPlugin = require("handlebars-webpack-plugin");
const express = require('express');
const app = express();
var exphbs = require('express-handlebars');
var layouts = require('handlebars-layouts');
console.log(`Dir name ${__dirname}`)
module.exports = {
    entry: {
      app: './src/client/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      index: "home.html",
      staticOptions: {
        redirect: false
      },
      before: function(app, server) {
        console.log("Before called");

        app.use(express.static(__dirname+"/dist"));
        app.use(express.static(__dirname+'/public'));

        var hbs = exphbs.create({
          defaultLayout: "layout",
          extname: ".html"
        });
        layouts.register(hbs.handlebars, {});
        app.engine(".html", hbs.engine);
        app.set('view engine', '.html');

        app.get('/view/*', (req, res, next) => {
         
          res.render('home');
        })

      },
      proxy: {
        '/user': 'http://localhost:8085',
      }
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),

      new HtmlWebpackPlugin({
        filename: 'home.html',
        template: './public/template.html',
        favicon: './public/favicon.ico'
      })
    ],
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash:8].[ext]',
                publicPath: '/public/',
                outputPath: '/public/'
              }
            }
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
        ],
    },
};
