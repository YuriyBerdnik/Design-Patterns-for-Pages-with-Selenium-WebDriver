const Header = require('./common/headerComponent.js');
const Footer = require('./common/footerComponent.js');
const SearchBox = require('./common/searchBoxComponent.js');

class BasePage {

    constructor() {
        this.header = new Header();
        this.footer = new Footer();
        this.searchBox = new SearchBox();
    }

    visit() {
        return browser.get('https://av.by' + this.url);
    }

    checkPageTitle(pageTitle) {
        return this.getPageTitle().then((title) => {
            return title === pageTitle;
        });
    }

    getPageTitle() {
        return browser.getTitle();
    }

    
    clickToElement(element) {
        return element.click();
    }

    setElementValue(element, value) {
        return element.sendKeys(value);
    }

    waitForVisibilityOf(element, timeout) {
        const timeoutMs = timeout || browser.params.defaultTimeOut;
        return browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeoutMs,
            `Waiting for visibilityOf of ${element.locator()} failed`);
    }

    setElementClear(element) {
        return element.clear();
    }

    getTextInputValue(element) {
        return element.getAttribute('value');
    }

    async clickElementByText(textToClick) {
		const arrayOfElementTexts = await this.collection.getText();
		const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
		if (elementToClickIndex === -1) {
			throw new Error(`No element with [${textToClick}] text found!`);
		}
		return this.collection.get(elementToClickIndex).click();
	}
}

module.exports = BasePage;