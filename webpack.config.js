/*
* 参数
* --progress  编辑进度
* --display-error-details  错误信息
* --watch   //监听变动并自动打包
* -p    //压缩混淆脚本，这个非常非常重要！
* */




module.exports={
    entry:'./app/index.js',//单一入口文件
    /*entry:{//多入口文件
        index:'./app/index.js',
        ma:'./app/ma.js'
    },*/
    output:{
        path:'./build',//出口文件路径
        filename:'build.js'//单一出口文件
        /*,filename:'[name].js'//多出口文件*/
    },
    module: {//loaders
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};

