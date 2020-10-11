var common  = require('./common');
var lodash = require('lodash');
var scrapper = require('./scrapper');

scrapper.fetchMainCategories(common.baseUrl, ((data, response) => {
    if(response){
        console.log(data);
    }
}))