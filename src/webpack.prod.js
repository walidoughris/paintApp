const path=require('path');

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
        }
}