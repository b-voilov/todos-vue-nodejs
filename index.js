var gzipStatic = require('connect-gzip-static');
var experess = require('express');
var dbManager = require('db.js').dbManager;

var db = new dbManager('db.json');
var app = experess();
app.use(gzipStatic(__dirname + '/dist'));



app.listen(process.env.PORT || 4000);
/* sudo kill -9 `sudo lsof -t -i:4000`
 */