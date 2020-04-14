const BasePage = require('./basePage');

class SearchPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://cars.av.by/search/extended';
        this.mainSection = element(by.css('.main-section'));
        this.brand = element.all(by.xpath("//select[@name='brand_id[0]']"));
        this.model = element.all(by.xpath("//select[@name='model_id[0]']"));
        this.generation = element.all(by.xpath("//select[@name='generation_id[0]']"));
        this.submit = element(by.css('.button.button-primary'));
    }

    fillForm() {
        this.clickToElement(this.brand)
            .then(() => {
                this.clickElementByText("BMW")
            })
            .then(() => {
                this.clickToElement(this.model)
            })
            .then(() => {
                this.clickElementByText("X5");
            })
            .then(() => {
                this.clickToElement(this.generation)
            })
            .then(() => {
                this.clickElementByText("F15, 2013—2018");
            })
            .then(() => {
                this.clickToElement(this.submit);
            })
    }
}

module.exports = SearchPage;