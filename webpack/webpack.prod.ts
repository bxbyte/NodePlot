import type { Configuration } from "webpack";

import { merge } from "webpack-merge";
import config from "./webpack.config";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default merge(config as Configuration, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin() // Clear docs before bundle
    ]
});