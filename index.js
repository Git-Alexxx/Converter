const Converter = require('./converter');
const request = require('request');
const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3";

request(url , function (err, res, body) {
    if (!err && res.statusCode === 200) {
        let converter = new Converter(JSON.parse(body)[2].buy);
        console.log(converter.convertToUa(3500));
    }
});