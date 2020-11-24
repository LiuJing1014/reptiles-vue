module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            "/": {
                target: 'http://localhost:5000/',
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "~@/style/mixin.scss";
                `,
            },
        },
    },
};


