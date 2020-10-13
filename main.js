var common  = require('./common');
var lodash = require('lodash');
var scrapper = require('./scrapper');
var fs = require('fs');

scrapper.fetchMainCategories(common.baseUrl, ((data, response) => {
    if(response){
        console.log(data);

        fs.appendFile("categories.json", JSON.stringify(data.categories), function(err){
            if(err){
                console.log("Error");
            }else{
                console.log("Data Scrapped");
            }
        })

    }
}))