var gzipStatic = require('connect-gzip-static');
var connect = require('connect');
var http = require('http');
var oneDay = 86400000;

var app = connect()
    .use(gzipStatic(__dirname + '/dist'));

http.createServer(app).listen(process.env.PORT || 4000);