import { resolve } from "path";

const paths = {
    src: "../src",
    dist: "../src",
    static: "../static"
};

export default (
    Object.fromEntries(
        Object.entries(paths)
            .map(([name, path]) => 
                [name, resolve(__dirname, path)]))
    ) as typeof paths