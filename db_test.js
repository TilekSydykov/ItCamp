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
    user: "itcamp",
    password: "itcamp",
    database: "db_nodejs_1",
    debug: false
});

app.set('port', process.env.PORT || 3000);

var router = express.Router();

pool.getConnection((err, conn)=>{
        if(err) {
            console.log("error");
            return;
        }
        conn.query("SELECT * from users", (err, result, fields)=>{
            if(err) throw err;
            result.forEach((it)=>{
                console.log(it);
            })
        });
    });

let server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("working");
});
