let  express = require('express'); //find express.js
let http = require('http');
let static1 = require('serve-static'); //dont user static , ->static1
let bodyParser = require('body-parser');
let path = require('path');
let mysql = require('mysql');

const app = express();

let pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    debug: false
});

app.set('port', process.env.PORT || 3000);
app.use(static1(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/').get((req, res)=>{
    console.log('main');
    res.send("main");
});

router.route('/set').get((req, res)=>{
    console.log('set');
    pool.getConnection((err, conn)=>{
        if(err) {
            console.log("error");
            return;
        }
        conn.query("SELECT * from publisher", (err, result, fields)=>{
            if(err) throw err;
            result.forEach((it)=>{
                console.log(it.id);
            })
        });
    });
    res.send("ok");
});

app.use('/', router);

let server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("working");
});
