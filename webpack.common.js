const { join: pathJoin } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.ts' // 入口文件的位置
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': pathJoin(__dirname, 'src')
    }
  },
  output: {
    filename: '[name].[hash].js', // 输出文件名字的格式
    path: pathJoin(__dirname, './dist') // 输出的绝对路径
  },
  optimization: {
    splitChunks: {
      chunks: 'all' // async表示只从异步加载得模块（动态加载import()）里面进行拆分；
      // initial表示只从入口模块进行拆分；all表示以上两者都包括
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html', // 指定模板文件
      filename: 'index.html' // 指定输出的html文件名称
    }), // HtmlWebpackPlugin必须位于插件数组的首位
    new VueLoaderPlugin(),
    new CleanWebpackPlugin() // 运行前删除dist目录
  ]
}
