var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("scripts"),
    entry: ["./app"],
    output: {
        path: path.resolve("build/scripts"),
        publicPath: "public/assets/",
        filename: "bundle.js"
    },

    plugins: [
        new ExtractTextPlugin("styles.css")
    ],

    devServer: {
        contentBase: "public"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    resolve: {
        extensions: [ ".js", ".ts", ".tsx" ]
    }
}