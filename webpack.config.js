const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {

	src: {
		templates: '/src/templates'
	}
};

module.exports = {
	entry: __dirname + '/src/js/app.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: 'pug-loader'
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
				  fallback: "style-loader",
				  use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: __dirname + `${paths.src.templates}/index.pug`,
			inject: false
		}),
		
		new ExtractTextPlugin("styles.css")
	]
};