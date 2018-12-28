let path = require('path')
module.exports = {
    entry: './src/index.js', //入口
    output: {
        filename: 'build.js', //修改打包文件名
        path: path.resolve('./build') //修改打包文件夹的名字
    }, //出口
    devServer: {
        //contentBase: './build',
        //port: 3000,
        //compress: true //服务器压缩
    }, //开发服务器
    module: {}, //模块设置
    plugins: [], //插件配置
    mode: 'development', //可以更改模式
    resolve: {} //配置解析

}