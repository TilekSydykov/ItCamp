# ItCamp

**Install mysql and nodejs** 

```
sudo apt-get install nodejs mysql-server
```

**Command for creating database.**
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
   '3h[*]0HY9Ho7Go&g987GTP9oTP9GY'
)

```

**Set environment for node:**

```
sudo npm install --save express body-parser serve-static mysql

```
