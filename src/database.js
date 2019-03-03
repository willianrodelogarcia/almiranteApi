//const mysql = require('mysql');
const sqls = require('mssql');

const config = {
    user: 'willianrodelo',
    password: 'William25',
    server: 'hotelalmirantedb.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'HotelAlmirante',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

sqls.connect(config, (err) => {
    
    if (!err) {
        console.log('DB is CONNECT');
    }else{
        console.log(err)
    }

});



module.exports = sqls;