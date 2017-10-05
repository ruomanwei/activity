var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/app.js",
	output: {
			path: path.resolve(__dirname, "dist"),
			filename: "js/[name].js"
	},
	module: {
		loaders: [
			{
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        loader: 'babel-loader',
        query: {
            presets: ['latest']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },{
         test: require.resolve('zepto'),
         loader: 'exports-loader?window.Zepto!script-loader'
      }
		]
	},
	plugins: [
			new htmlWebpackPlugin({
				title: '双11攻略',
				inject: false,
				template: "./src/template.html",
				filename: "index.html",
	      minify: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          removeCDATASectionsFromCDATA: true,
          collapseWhitespace: true,
          conservativeCollapse: false,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
	      }
			})
	]
}
