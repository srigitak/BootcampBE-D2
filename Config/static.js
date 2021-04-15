module.exports = {
    public: {
        root: path.join(__dirname, "public"),
        prefix: "/",
    },
    assets: {
        root: path.join(__dirname, "public/assets"),
        prefix: "/assets",
        decorateReplay: false,
    },
    forms: {
        root: path.join(__dirname, "public/forms"),
        prefix: "/forms",
        decorateReplay: false,
    },
};