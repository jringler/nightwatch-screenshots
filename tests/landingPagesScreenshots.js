require('dotenv').config()

module.exports = {

  'Taking a screenshots of all active landing pages': function (browser) {

      var campaigns = require('../campaigns.json');

      for(let partner in campaigns) {
        var url = campaigns[partner].landing_page;
        browser
          .url(process.env.HOST + url)
          .waitForElementVisible('body', 10000,'Navigating to landing page: ' + url)
          .waitForElementVisible('.logoLink', 10000)
          .pause(2000)
          .saveScreenshot('./screenshots' + url + '.png')
      }

      browser.end()

    }
  }
