const scraper = require('scraperjs');

class StylelintRepository {
    /**
     * getRuleData - scrapes the rule page on stylelint.io website to get the data we need
     * @param rule
     * @returns {ScraperPromise}
     */
    getRuleData(rule) {
        return scraper.StaticScraper.create(`https://stylelint.io/user-guide/rules/${rule}/`)
            .scrape(($) => {
                return {
                    description: $('.phenomic-BodyContainer p').first().text(),
                    correct: $('code.valid-pattern').first().text(),
                    incorrect: $('code.invalid-pattern').first().text(),
                };
            });
    }
}

module.exports = new StylelintRepository();