const { Configuration  } = require('webpack') // 非常好用的提示插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin') // webpack5内置的，不需要安装
/**
 * @type {Configuration} //配置智能提示
 */

const config = {
    mode:'none',
    entry: './index.js',
    output:{
        filename:'bundle.js'
    },
    devServer:{
        port: 9001, // remote
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ModuleFederationPlugin({
            name : 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './addList':'./list.js' // value 暴露的模块的路径
            }
        })
    ]
}
module.exports = config