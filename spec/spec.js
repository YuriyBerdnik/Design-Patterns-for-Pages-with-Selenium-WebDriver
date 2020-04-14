const SearchPage = require('../pages/searchPage');
const HomePage = require('../pages/homePage');

describe('Sign up to the site', () => {
    let searchPage, homePage;

    beforeAll(() => {
        homePage = new HomePage();
        searchPage = new SearchPage();
        return homePage.visit();
    });

    it('should check page title of Home Page', () => {
        return expect(homePage.checkPageTitle('av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.')).to.eventually.be.true;
    });

    it('should check that Home page is fully loaded', () => {
        return homePage.homePageNewsModuleShouldBeVisible();
    });

    it('should click Advanced search', () => {
        return homePage.openAdvancedSearch();
    });

    it('should check page title of Home Page', () => {
        return expect(searchPage.checkPageTitle('Расширенный поиск по объявлениям')).to.eventually.be.true;
    });

    it('should check page main section', () => {
        return expect(searchPage.waitForVisibilityOf(searchPage.mainSection, GLOBAL_TIMEOUT));
    });

    it('should fill form and should check logo and page title', () => {
        searchPage.fillForm();
        searchPage.waitForVisibilityOf(searchPage.header.logo, GLOBAL_TIMEOUT);
        return expect(searchPage.checkPageTitle('Продажа и покупка авто в Беларуси. Автомалиновка — объявления о продаже транспорта.')).to.eventually.be.true;
    });
});