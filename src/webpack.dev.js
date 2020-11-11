const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:"./src/main.js",
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:path.join(__dirname, 'dist'),
        overlay: true
    },
    mode:'development',
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
             }
            ]
        },
    plugins:[new htmlWebpackPlugin({template:'./src/index.html'})]
}