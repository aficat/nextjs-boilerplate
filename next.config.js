const debug = process.env.NODE_ENV !== "production";
module.exports = {
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/about": { page: "/about" },
        }
    },
    assetPrefix: !debug ? 'https://aficat.github.io/nextjs-boilerplate/' : '',
}