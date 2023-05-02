const { Configuration} = require('webpack')
const path = require('path')
/**
 * @type { Configuration} // 配置智能提示
 */
const config = {
    entry:"./src/index.ts",
    mode:"none",  // 用源码的方式打包，这样就不会压缩成一堆看不懂了。
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,'lib'),
        library:"Wujie", 
        libraryTarget:"umd",// 正常工作中用不到，只有在开发库时使用，配置成umd兼容
        umdNamedDefine:true
    },
    externals:{  // 不把vue和wujie打包进去（只有100多行，不然有2.3W行）
        vue:"vue",
        wujie:"wujie"
    },
    module:{
        rules:[{
            test:/\.ts$/,
            // use:"ts-loader"
            use:"swc-loader" // 使用超快的swc打包
        }]
    }
}

module.exports = config