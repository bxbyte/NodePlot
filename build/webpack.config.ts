import paths from "./paths"
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    output: {
        path: paths.dist,
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            { // Typescript
                test: /\.ts$\.mts/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            { // SCSS
                test: /\.scss$\.sass/,
                exclude: /node_modules/,
                use: ['sass-loader'],
            },
        ],
      },
    plugins: [
      new HtmlWebpackPlugin({ // Template
        template: "src/templates/index.html",
        filename: "index.html",
        chunks: ["main"]
      })
    ]
};