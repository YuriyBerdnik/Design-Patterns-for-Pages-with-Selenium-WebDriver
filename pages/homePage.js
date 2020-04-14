const BasePage = require('./basePage');
// const provider = require('./pageObject');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = '';
        this.newsTop = element(by.css('.news-top'));
        this.advancedSearch = element(by.css('.general-search'))
        this.newsModule = element(by.css('div.news-other'))
    }

    homePageNewsModuleShouldBeVisible() {
        return this.newsModule.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    };

    openAdvancedSearch() {
        return this.advancedSearch.click();
    }
}

module.exports = HomePage;