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
        port: 9002, // host
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ModuleFederationPlugin({
            name:'host',
            remotes:{
                remote:'remote@http://localhost:9001/remoteEntry.js'
            }
        })
    ]
}
module.exports = config