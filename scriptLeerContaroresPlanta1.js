var http = require('http');

var options = {
  host: '192.168.1.24',
  path: '/webglue/getReport?name=ReportDeviceStatistics&lang=es',
  port: '80',
  //This is the only line that is new. `headers` is an object with the headers to request
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'es-ES,es;q=0.9',
    'Cache-Control': 'max-age=0'    
    }
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}
var req = http.request({host:'192.168.1.24'},function(response){
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
    });
    response.on('end', function () {
        console.log("PRIMERA: "+str);
        var req2 = http.request(options, callback);
        req2.end();
      });
});

req.end();