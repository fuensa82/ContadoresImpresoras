var util = require("util"),
    http = require("http");

var options = [{
    host: "192.168.1.25",
    port: 80,
    path: "/total_count.html"
},{
    
}];

var content = "";   

var req = http.request(options[0], function(res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        content += chunk;
    });

    res.on("end", function () {
        console.log(content);
    });
});

req.end();