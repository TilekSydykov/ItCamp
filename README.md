# ItCamp

**Install mysql and nodejs** 

```
sudo apt-get install nodejs mysql-server express-error-handler
```

**Nodejs basic commands**

execute js console
``` 
node 

```

execute programm
``` 
node YOUR_PROGRAMM.js

```

version check
``` 
node -v

```

node help center
``` 
node -h

```

**Node 'HelloWorld.js'**

make HelloWorld.js file
```
touch HelloWorld.js

```
open file in some text editor and insert this code
```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080); 
```
run command
```
node HelloWorld.js

```

**Command For Managing database**

*user*: '**root**'

*password*: ''
``` 
sudo mysql -u root
```
after this command sreate database and table

**Command for creating database. Creating table. Inserting test data**
``` 
CREATE DATABASE db_nodejs_1; 

CREATE TABLE db_nodejs_1.users (
   id varchar(255),
   name varchar(255),
   age varchar(255),
   password varchar(255),
);

INSERT `db_nodejs_1`.`users` VALUES (
   '1', 
   'Ulan', 
   '25', 
   '3h0HY9Ho7Go&g987GTP9oTP9GY'
)

```

**Set environment for node:**

```
sudo npm install --save express body-parser serve-static mysql

```
<!--

**User Agent JS**

``` 
let express = require('express'); // используем фреймворк экспресс
let http = require('http');  
let app = express();
app.use((req, res, next)=>{  // анонимная 
	let userAgent = req.header('User-Agent'); 
	let paramName = req.query.name;
	res.send(`<h3> response:-> ${userAgent} </h3> 
		<h3>Param Name-> ${paramName} </h3>`); // sending response to user
});
let server = http.createServer(app);
server.listen(3000, ()=>{
	console.log('listening on port 3000 , http://localhost:3000') 
})
```

**1_5_2_webJs**
```
let express = require('express');
let http = require('http');
let app = express();

app.use((req, res, next)=>{
	req.user = 'mike';
	next();
});

app.use((req, res, next)=>{
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
	res.end(`<h1> response from server. express: ${req.user} </h1>`);
});

let server = http.createServer(app);

server.listen(3000, ()=>{
	console.log('listening on port 3000')
})

```

**DataBase Connection sample**
```
-->
