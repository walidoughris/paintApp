const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:"./src/main.js",
    output:{
        filename:'main.[contentHash].js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:"dist",
        overlay:true
    },
    mode:'production',
    module:{
          rules:[
            {
              test:/\.js$/,
              use:["babel-loader"],
              exclude:/node_modules/
            },
             {
               test:/\.css$/,
               use:[
                    'style-loader'
                   ,'css-loader'
               ]
             },
             { test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                  outputPath: '../fonts',
              }
             }
          ] 
        },
        plugins:[new htmlWebpackPlugin({template:'./src/index.html'})]
      
}