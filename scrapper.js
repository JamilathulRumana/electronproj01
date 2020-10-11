var puppeteer = require("puppeteer");
var common = require('./common');

module.exports.fetchMainCategories = async (url,callback) => {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil : 'domcontentloaded'});
    await page.addScriptTag({url : 'https://code.jquery.com/jquery-3.2.1.min.js'});
    const result = await page.evaluate(() => 
    {
        var data = {
            categories: [] 
        }

        $('.nav-search-dropdown').children().each(function(){
            let obj = {
                text: $(this).text()
            }
            data.categories.push(obj);
        })
        return data;
    })
    await page.close();
    await browser.close();
    callback(result,true);
}