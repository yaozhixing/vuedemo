const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");			//打包html
const ExtractTextPlugin = require("extract-text-webpack-plugin");	//style分离外部调用
const CleanWebpackPlugin = require("clean-webpack-plugin");			//清空文件夹
const WebpackMerge = require("webpack-merge");

const extractcss = new ExtractTextPlugin("css/[name].one.[chunkhash:10].css");		//打包第一个css
const extractless = new ExtractTextPlugin("css/[name].two.[chunkhash:10].css");		//打包第二个less转换的css

module.exports = {
	/*入口文件*/
	entry: path.resolve(__dirname, 'src/main.js'),
	
	/*输出文件*/
	output: {
		path: path.resolve(__dirname, 'dist'),		//路径
		filename: 'bundle.[chunkhash:10].js'					//打包名称
	},
	
	//设置webpack本地服务器的配置
	devServer:{
		contentBase: './',
		port:'8383',	//监听端口
        inline:true,	//设置为true，当源文件改变的时候会自动刷新
        historyApiFallback:true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot:true,		//允许热加载
		proxy: {
            "/api": {
                "target": "http://192.168.1.120",
                "changeOrigin": true,
                "pathRewrite": {"^/api": "/api"}
            }
        },
    },
	
	//设置source map选项
	devtool:'source-map',		
	
	module: {
		rules: [
			/*css 规则*/
			{
				test: /\.css$/,
				use: extractcss.extract(["css-loader"])
			},
			
			/*less 规则*/
			{
				test: /\.less$/,
				use: extractless.extract(["css-loader","less-loader"])
			},
			
			/*图片 规则*/
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				use: "file-loader?limit=8192&name=images/[name].[ext]"
			},
			
			/*js ES6转换ES5 规则*/
			{
				test:/\.js$/,
				exclude:/(node-modules|bower-components)/,
				use: {
					loader:"babel-loader",
					options: {
						presets:['env'] 	//稳定版本
					}
				}
			}
		]
	},
	
	/*插件配置*/
	plugins:[
		//清空输出目录
		new CleanWebpackPlugin(['./dist']),
		
		new HtmlWebpackPlugin({
			hash: true,
            chunks: ['index'],
			template:"./index.html",
            filename: "index.html"
		}),
		
		//打包多个css，css和less转换的css
		extractcss,
		extractless
	]
		
	
};