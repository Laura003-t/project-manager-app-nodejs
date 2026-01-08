var mysql = require('mysql');
 
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ROOT123.',
    database: 'lapoplanner'
});


conn.connect(function(err) {
    if (err) throw err;
    console.log('Database: lapoplanner connected');
});

module.exports = conn;