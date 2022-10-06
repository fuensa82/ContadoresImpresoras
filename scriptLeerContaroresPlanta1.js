var http = require('http');
var DOMParser = new (require('xmldom')).DOMParser;
var fs = require("fs");
const { rejects } = require("assert");
const xml2js = require('xml2js')

var date = new Date();
const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

var rutaFichero = "//ser4-fuensalida/DatosUsuarios/Usuarios/vpalomo/Impresoras/Lecturas" + meses[date.getMonth()] + ".csv";
var hoy = getHoy();
var hora = getHoraActual();


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
//respuesta de segunda peticion
callback = function (response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {

    str = "<!DOCTYPE html><body>" + str + "</body>";
    str = str.replaceAll("width = 400 ", "");
    str = str.replaceAll("width = 400 ", "");
    str = str.replaceAll("<br>", "");
    str = str.replaceAll("&nbsp;", "");

    //var document = DOMParser.parseFromString(str,'text/xml');
    //var x = document.getElementsByTagName("tr");
    xml2js.parseString(str, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        cadenaResp
        fs.appendFile(rutaFichero, cadenaResp, (err) => {
          console.log("\nImpresora leída: maquina planta 1");
        });
      }
    });




    console.log(str);
  });
}
var req = http.request({ host: '192.168.1.24' }, function (response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log("PRIMERA: " + str);
    var req2 = http.request(options, callback);
    req2.end();
  });
});

req.end();

function getHoy() {
  var dt = new Date();
  var month = dt.getMonth() + 1;
  var day = dt.getDate();
  var year = dt.getFullYear();
  return day + '-' + month + '-' + year;
}
/**
 * Calcula la hora en formato bonito
 */
function getHoraActual() {
  var date = new Date();
  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  var min = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;
  var sec = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;
  return hour + ":" + min + ":" + sec;
}