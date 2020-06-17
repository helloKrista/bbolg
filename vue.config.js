module.exports = {
    runtimeCompiler:true,
    publicPath: '/',
    devServer:{
        port:8080,
        proxy:"http://wthrcdn.etouch.cn"
        }
    }
