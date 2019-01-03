let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let webpack = require('webpack')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
    //1. 引插件
let CopyWebpackPlugin = require('copy-webpack-plugin')
let glob = require('glob')
let PurifyCssPlugin = require('purifycss-webpack')
module.exports = {
    entry: './src/index.js', //入口
    output: {
        filename: 'build[hash:8].js', //修改打包文件名
        path: path.resolve('./build') //修改打包文件夹的名字,这个路径必须是绝对路径
    }, //出口
    devServer: {
        contentBase: './build',
        port: 5000,
        compress: true, //服务器压缩
        hot: true,
        open: true //自动打开浏览器
    }, //开发服务器
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [{
                            loader: 'css-loader'
                        },
                        { loader: 'postcss-loader' }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [{
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                })
            }
        ]
    }, //模块设置
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'css/css.css'
        }),
        //2. 直接拷贝不需要打包的文件
        new CopyWebpackPlugin([{
            from: './src/doc',
            to: 'public'
        }]),
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        //清空生产的文件夹 清除多个可以是数组        
        new CleanWebpackPlugin(['./build']),
        //打包html文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: '首页练习',
            hash: true //清缓存
                // minify: {
                //     removeAttributeQuotes: true, //去掉双引号
                //     collapseWhitespace: true //折叠一行

            // }

        }),
        new PurifyCssPlugin({
            paths: glob.sync(path.resolve('src/*.html'))
        })
    ], //插件配置
    mode: 'development', //可以更改模式 'development' 和'production'
    resolve: {} //配置解析

}