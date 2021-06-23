var mysql = require('mysql2');


const pool = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password : 'krun1017',
    database : 'coding',
    port:3306
});

pool.connect();

pool.query('SELECT * FROM client', function(err, results, fields){
    if(err){
        console.log(err);
    }
    console.log(results);
});

pool.end();