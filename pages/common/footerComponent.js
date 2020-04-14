class Footer {
    constructor() {
        this.footer = element(by.css('.footer'));
        this.footerLinks = element.all(by.css('.footer__nav'));
    }
}

module.exports = Footer;