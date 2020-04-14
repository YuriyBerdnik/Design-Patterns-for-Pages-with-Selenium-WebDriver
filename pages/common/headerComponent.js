class Header {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.header = element(by.css('.header.header'));
        this.headerLinks = element.all(by.css('.nav__main'));
        this.enterLink = element(by.css('.nav__item.nav__item--login'));
        this.postLInk = element(by.css('.nav__item.nav__item--add'))
    }
}

module.exports = Header;