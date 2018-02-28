
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var publicPath = '/src/';

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    // 页面入口配置
  entry: {
    app: './src/app.js'
  },
  target: 'electron',     // 指明编译方式为 electron 让node原生模块 不被webpack处理
  externals: nodeModules, // 禁止webpack处理node第三方模块

  context: __dirname,
  node: {
      __filename: false,
      __dirname: false
  },

  // 页面输出配置
  output: {
    path: __dirname + publicPath,
    publicPath: __dirname + publicPath,
    filename: 'dist/build.js',
    chunkFilename: 'dist/chunks/[id]-[chunkhash].js'
  },
  // 加载器
  module: {
    loaders: [
      {
        // 加载 .vue 文件
        test: /\.vue$/,
        loader: 'vue'
      },
      // {
      //     // 加载转换 es2015(es6) js文件
      //     test: /\.js?$/,
      //     loader: 'babel',
      //     exclude: /node_modules|vue\/dist/
      // },

      {
          // 加载除js外其他文件
          test: /\.(png|jpg|gif)$/,
          loader: 'file?name=dist/images/[name].[ext]?[hash]'
      },
      {
        // 加载css文件
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        // 加载less文件
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(['css','less'])
      }

    ]
  },


  resolve: {
    root: 'D:/SublimeWorkspaces/IRS_CLIENT/src', //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.jsx', '.less', '.json'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
        Db : path.join(__dirname, './src/script/db'),//后续直接 require('Ajax') 即可
        components : path.join(__dirname, './src/components/'),
        script : path.join(__dirname, './src/script/')
    }
  },

  plugins: [
    new ExtractTextPlugin('dist/[name].css')
  ]


  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({ name: 'common',   filename: 'common.chunk.js' })
  //   //new webpack.HotModuleReplacementPlugin()
  // ]


    //这个属性里主要设置 extensions , 也就是文件后缀名
    //查找依赖的时候的会以此查找这里设置的几个文件名来查找文件
    /*
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },*/



}

if (process.env.NODE_ENV == 'production') {

  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]

} else {
  module.exports.devtool = '#source-map'
}
