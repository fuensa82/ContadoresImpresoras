const http = require('http');

http.get('http://192.168.1.24/webglue/getReport?name=ReportDeviceStatistics&lang=es', (resp) => {
  let data = '';

  // Un fragmento de datos ha sido recibido.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Toda la respuesta ha sido recibida. Imprimir el resultado.
  resp.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
///////////////////////////////////////////
/*
var axios = require('axios');

axios.all([
  axios.get('http://192.168.1.24/'),
  axios.get('http://192.168.1.24/webglue/getReport?name=ReportDeviceStatistics&lang=es')
]).then(axios.spread((response1, response2) => {
  console.log(response1.data.url);
  console.log(response2.data.url);
})).catch(error => {
  console.log(error);
});*/
///////////////////////////////////////////

/*
const superagent = require('superagent');

superagent.get('http://192.168.1.24/').query({})
.end((err, res) => {
  if (err) { return console.log(err); }
  console.log(res.body.url);
  console.log(res.body.explanation);
  console.log(res.text);

  superagent.get('http://192.168.1.24/webglue/getReport?name=ReportDeviceStatistics&lang=es').query({})
    .end((err, res2) => {
        if (err) { return console.log(err); }
        console.log(res2.body.url);
        console.log(res2.body.explanation);
        console.log(res2.text);
    
    });
});*/