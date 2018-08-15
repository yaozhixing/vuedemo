const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	/*入口文件*/
	entry: './src/main.js',
	
	/*输出文件*/
	output: {
		path: path.resolve(__dirname, 'dist'),	//路径
		filename: 'bundle.js'					//打包名称
	},
	
	devServer:{
		contentBase: './'
	},
	
	module: {
		rules: [
			/*css 规则*/
			{
				test: /\.css$/,
				use: ["style-loader","css-loader"]
			},
			
			/*less 规则*/
			{
				test: /\.less$/,
				use: ["style-loader","css-loader","less-loader"]
			},
			
			/*图片 规则*/
			{
				test: /\.(jpg|png|gif|svg|jpeg)$/,
				use: ["file-loader"]
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
		new HtmlWebpackPlugin({
			template:"./index.html"
		})
	]
		
	
};