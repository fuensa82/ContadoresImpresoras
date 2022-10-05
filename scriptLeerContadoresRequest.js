var request = require('request');

//Step 1 - Set the headers
var headers = {
    'User-Agent':       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
    'Content-Type':     'application/x-www-form-urlencoded',
    'Accept':   'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
}

//Step 2 - Configure the request
var options = {
    url     : 'http://192.168.1.24/webglue/getReport?name=ReportDeviceStatistics&lang=es',
    method  : 'GET',
    jar     : true,
    headers : headers
}

//Step 3 - do the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }else{
        console.log(error);
    }
});