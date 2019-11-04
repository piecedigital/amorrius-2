export default {
    plugins: [
        "~/plugins/services-loader.ts",
        "~/plugins/components.ts"
    ],
    modules: [
        "@nuxtjs/style-resources"
    ],
    build: {
        extend: function (config, {
            isDev,
            isClient
        }) {
            config.node = {
                fs: "empty",
                net: "empty"
            };
        }
    },
    buildModules: [
        "@nuxt/typescript-build"
    ],
    serverMiddleware: [{
        path: "/api",
        handler: "~/serverMiddleware/api/index.ts"
    }],
    css: [
        "~/assets/css/global.scss"
    ],
    styleResources: {
        scss: [
            "~/assets/css/_variables.scss"
        ]
    }
}