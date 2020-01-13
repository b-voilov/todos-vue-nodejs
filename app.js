const gzipStatic = require('connect-gzip-static');
var experess = require('express');
var dbManager = require('./db.js').dbManager;
var crypto = require('crypto');
const bodyParser = require('body-parser');

const hashFunction = (data) => crypto.createHash('sha256').update(data+(new Date().getTime()+'')).digest('base64');
const getIp = (req) => req.headers['x-forwarded-for'] || req.connection.remoteAddress;

let db = new dbManager();
db.initDB('db.json')

let users = {}

let app = experess();
app.use(bodyParser.json());
app.use(gzipStatic(__dirname + '/dist'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/register',(req,res)=>{
    try{
        db.addDocuments('users',{'name':req.body.name, 'password':req.body.password})
        res.send({'status':200})
    } catch(error){
        res.send({'status':400})
    }
})

app.post('/authorize',(req,res)=>{
    try {
        const user = db.getDocuments('users').find(user=>user.name == req.body.name);
        if(user["password"] == req.body.password){
            const hash = hashFunction(JSON.stringify(user));
            res.send({'jwt':hash});
            users[getIp(req)] = {'jwt':hash,'user':user};
        }
    } catch (error){
        res.send({'status':400})
    }
})

app.post('/getAllTodos', (req, res) => {
    try { 
        const ip = getIp(req);
        if(users[ip]['jwt'] === req.body.jwt){
            res.send(users[ip]['user']['todos']);
        }else{
            res.send({'status':400}); 
        }
    } catch (error) {
        res.send({'status':400});
    }
})

app.post('/saveTodos', (req, res) => {
    try {
        const ip  = getIp(req);
        if(users[ip]['jwt'] === req.body.jwt){
            users[ip]['user']['todos'] = req.body.todos;
            db.save();
            res.send({'status':200})
        }
    } catch (error) {
        console.log('save todos endpoint error '+error);
        res.send({'status':400});
    }
})

app.listen(process.env.PORT || 4000);
/* sudo kill -9 `sudo lsof -t -i:4000`
 */