let mysql = require('mysql');

let connInfo = {
    host: "localhost",
    user: "root",
    password: "furiecnd",
    database: "readyassist"
}

let connection = mysql.createConnection(connInfo);

let sql = "select * from candidates;"
let sql1 = "select * from Employees;"
let sql2 = "select * from Trainees;"


connection.query(sql,function(err, data, fields){
    if(err) throw err;
    console.log(JSON.stringify(data));

    });
    
connection.query(sql1,function(err, data, fields){
    if(err) throw err;
    console.log(JSON.stringify (data));

    });
    

    connection.query(sql2,function(err, data, fields){
        if(err) {err()
        };
        console.log(JSON.stringify (data));
    
        });
 

    
connection.end();