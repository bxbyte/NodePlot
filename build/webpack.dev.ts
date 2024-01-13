import type { Configuration } from "webpack";
import type from "webpack-dev-server";

import { merge } from "webpack-merge";
import config from "./webpack.config";
import { HotModuleReplacementPlugin } from "webpack";

export default merge(config as Configuration, {
    mode: "production",
    devServer: {
        open: true,
        compress: true,
        hot: true,
        port: 5500,
    },
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
});