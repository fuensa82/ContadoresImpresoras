var request = require("request");
var DOMParser = new (require('xmldom')).DOMParser;
var fs = require("fs");
const { rejects } = require("assert");

var date=new Date();
const meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

var rutaFichero="//ser4-fuensalida/DatosUsuarios/Usuarios/vpalomo/Impresoras/Lecturas"+meses[date.getMonth()]+".csv";
var hoy=getHoy();
var hora=getHoraActual();

// URL of the musicbrainz API.
var maquinas = [{
    nombre:"Ayuntamiento Abajo",
    url:"http://192.168.1.25/total_count.html",
    getNodoBN:"document.getElementsByTagName('tr')[2].childNodes[3].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[3].childNodes[3].childNodes[0]"
},{
    nombre:"Ayuntamiento Arriba",
    url:"http://192.168.1.21/total_count.html",
    getNodoBN:"document.getElementsByTagName('tr')[2].childNodes[3].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[3].childNodes[3].childNodes[0]",
},{
    nombre:"Juzgado",
    url:"http://192.168.8.72/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Policia - Pablo",
    url:"http://192.168.8.23/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Policia - Patrulla",
    url:"http://192.168.8.22/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Biblioteca Celeste",
    url:"http://192.168.6.200/total_count.html",
    getNodoBN:"document.getElementsByTagName('tr')[2].childNodes[3].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[3].childNodes[3].childNodes[0]",
},{
    nombre:"Biblioteca Sonia",
    url:"http://192.168.6.153/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Servicios Sociales - Conchi",
    url:"http://192.168.2.21/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Centro de Dia",
    url:"http://192.168.5.21/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Casa de Cultura",
    url:"http://192.168.4.21/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Archivo - Angela",
    url:"http://192.168.1.26/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},{
    nombre:"Deportes - Emiliano",
    url:"http://192.168.9.21/machine_status.html",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
},






{
    nombre:"Ayuntamiento Planta 1",
    url:"http://192.168.1.24/webglue/getReport?name=ReportDeviceStatistics&lang=es",
    getNodoBN:"document.getElementsByTagName('tr')[12].childNodes[1].childNodes[0]",
    getNodoCOLOR:"document.getElementsByTagName('tr')[13].childNodes[1].childNodes[0]",
}
];

if(!fs.existsSync(rutaFichero)){
    fs.appendFile(rutaFichero, "Impresora;Blanco y Negro;Color;fecha lectura\r\n", (err) => {
        console.log("Error");
    });
}else{
    fs.appendFile(rutaFichero, "*********************** "+hoy +" - "+ hora+" ********************************\r\n", (err) => {
        console.log("Error");
    });
}
var indiceMaquina=0;

/*
maquinas.forEach(maquina => {
    request({
        headers: {
            'User-Agent': 'Ayto Fuensalida - Recoge contadores',
        },
        url: maquina.url,
        json: false,
        qs:{"name":"ReportDeviceStatistics"}
    }, async function (error, response, body) {
        //console.
        if (!error && response.statusCode === 200) {
            var document = DOMParser.parseFromString(body);
            var x = document.getElementsByTagName("tr");
            console.log(eval(maquina.getNodoBN));
            console.log(eval(maquina.getNodoCOLOR));
            var cadenaResp=maquina.nombre+";"+eval(maquina.getNodoBN)+";"+eval(maquina.getNodoCOLOR)+";"+hoy+" "+hora+"\r\n";
            fs.appendFile(rutaFichero, cadenaResp, (err) => {
                console.log("\nImpresora leída: "+maquina.nombre);
            });

        }else{
            console.log("ERROR IN FUNCTION")
        }
    })
});
*/
/*
maquinas.forEach(maquina => {
    request(maquina.url,{json: true}, function  (error, response, body) {
        //console.
        if (!error && response.statusCode === 200) {
            var document = DOMParser.parseFromString(body);
            var x = document.getElementsByTagName("tr");
            console.log(eval(maquina.getNodoBN));
            console.log(eval(maquina.getNodoCOLOR));
            var cadenaResp=maquina.nombre+";"+eval(maquina.getNodoBN)+";"+eval(maquina.getNodoCOLOR)+";"+hoy+" "+hora+"\r\n";
            fs.appendFile(rutaFichero, cadenaResp, (err) => {
                console.log("\nImpresora leída: "+maquina.nombre);
            });

        }else{
            console.log("ERROR al leer impresora: "+maquina.nombre+ " - ERROR: "+error)
            fs.appendFile(rutaFichero, hoy+" "+hora+" - ERROR al leer impresora: "+maquina.nombre+ " - ERROR: "+error+"\r\n", (err) => {
                console.log("\nImpresora leída: "+maquina.nombre);
            });
        }
    })
});*/

function leerMaquina(indiceMaquina){
    var maquina=maquinas[indiceMaquina];
    var promise=new Promise(function(resolve, reject) {
        request(maquina.url,{json: true}, function  (error, response, body) {

            if (!error && response.statusCode === 200) {
                var document = DOMParser.parseFromString(body);
                var x = document.getElementsByTagName("tr");
                console.log(eval(maquina.getNodoBN));
                console.log(eval(maquina.getNodoCOLOR));
                var cadenaResp=maquina.nombre+";"+eval(maquina.getNodoBN)+";"+eval(maquina.getNodoCOLOR)+";"+hoy+" "+hora+"\r\n";
                fs.appendFile(rutaFichero, cadenaResp, (err) => {
                    console.log("\nImpresora leída: "+maquina.nombre);
                    resolve();
                });

            }else{
                console.log("ERROR al leer impresora: "+maquina.nombre+ " - ERROR: "+error)
                fs.appendFile(rutaFichero, hoy+" "+hora+" - ERROR al leer impresora: "+maquina.nombre+ " - ERROR: "+error+"\r\n", (err) => {
                    console.log("\nImpresora leída: "+maquina.nombre);
                    resolve();
                });
            }
        });
    });

    promise.then(function(){
        indiceMaquina++;
        if(maquinas.length>indiceMaquina){
            leerMaquina(indiceMaquina);
        }
    });

    
}

function getHoy(){
	var dt = new Date();
	var month = dt.getMonth()+1;
	var day = dt.getDate();
	var year = dt.getFullYear();
	return day + '-' + month + '-' + year;
}
/**
 * Calcula la hora en formato bonito
 */
 function getHoraActual(){
	var date = new Date();
	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;
	var min  = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;
	var sec  = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;
	return hour + ":" + min + ":" + sec;
}

leerMaquina(indiceMaquina);
