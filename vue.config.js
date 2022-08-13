
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = ['js', 'css'];

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: "./",//表示打包 打相对路径
  productionSourceMap: false,//打包时不要map文件
  configureWebpack: {
    // plugins: [
    // new BundleAnalyzerPlugin({
    //   //  可以是`server`，`static`或`disabled`。
    //   //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
    //   //  在“静态”模式下，会生成带有报告的单个HTML文件。
    //   //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
    //   analyzerMode: 'server',
    //   //  将在“服务器”模式下使用的主机启动HTTP服务器。
    //   analyzerHost: '127.0.0.1',
    //   //  将在“服务器”模式下使用的端口启动HTTP服务器。
    //   analyzerPort: 8889,
    //   //  路径捆绑，将在`static`模式下生成的报告文件。
    //   //  相对于捆绑输出目录。
    //   reportFilename: 'report.html',
    //   //  模块大小默认显示在报告中。
    //   //  应该是`stat`，`parsed`或者`gzip`中的一个。
    //   //  有关更多信息，请参见“定义”一节。
    //   defaultSizes: 'parsed',
    //   //  在默认浏览器中自动打开报告
    //   openAnalyzer: true,
    //   //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
    //   generateStatsFile: false,
    //   //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
    //   //  相对于捆绑输出目录。
    //   statsFilename: 'stats.json',
    //   //  stats.toJson（）方法的选项。
    //   //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
    //   //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    //   statsOptions: null,
    //   logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
    // })
    plugins: [
      new CompressionWebpackPlugin({
        //[file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
        filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
        //可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"。
        algorithm: 'gzip',
        //所有匹配该正则的资源都会被处理。默认值是全部资源。
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        //只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
        threshold: 10240,//超过10kb直接压缩
        //只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
        minRatio: 0.8
      }),
    ],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
      vant: "vant",
  
    },
  },


};
