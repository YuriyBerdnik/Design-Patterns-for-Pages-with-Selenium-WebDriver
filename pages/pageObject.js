const PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "search": "./searchPage"
};

module.exports.getPageObjects = (pageName) => {
    return require(PAGE_OBJECT_MAP[pageName]);
};