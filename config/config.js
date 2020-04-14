const GLOBAL_TIMEOUT = 10000;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec/spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        global.ec = protractor.ExpectedConditions;

        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    }
};
