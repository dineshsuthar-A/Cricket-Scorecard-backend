const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    port: "4306",
    database: 'crickcard'
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("Database connected Successfully!!");
});

module.exports = connection;