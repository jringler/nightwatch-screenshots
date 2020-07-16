require('dotenv').config()

module.exports = {

  'Taking a screenshot of all active landing pages': function (browser) {

      var campaigns = require('../campaigns.json');
      var testType = browser.options.desiredCapabilities.browserName;

      for(let partner in campaigns) {
        var url = campaigns[partner].landing_page;
        browser
          .url(process.env.HOST + url)
          .waitForElementVisible('body', 10000,'Navigating to landing page: ' + url)
          .waitForElementVisible('a.navLink.logIn', 10000)
          .pause(2000)
          .saveScreenshot(`./screenshots-${testType}` + url + `.png`)
      }

      browser.end()

    }
  }
