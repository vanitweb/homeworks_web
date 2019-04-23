
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	console.log('url stranici: ' + req.url);
	if(req.url === '/index' || req.url === '/'){
	res.writeHead(200, {'Content-type': 'text/html; charset=utf8'});
	fs.createReadStream(__dirname + '/index.html').pipe(res);
}
// 	var obj = {
// 		model: 'Audi',
// 		speed: '234',
// 		data: 2016,
// 	};
// res.end(JSON.stringify(obj));
});

server.listen(3000);
console.log('Uraaa');