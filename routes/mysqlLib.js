/**
 * Created by WarMachine on 24/06/18.
 */

const mysql = require('mysql');
const db_config = {
    host: config.get('databaseSettings.host'),
    user: config.get('databaseSettings.user'),
    password: config.get('databaseSettings.password'),
    // port: config.get('databaseSettings.mysqlPORT'),
    database: config.get('databaseSettings.database'),
    multipleStatements: true
};

function handleDisconnect() {
    connection = mysql.createConnection(db_config);// Recreate the connection, since
    // the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}



function initializeConnectionPool(db_config){
    var numConnectionsInPool = 0;
    console.log('CALLING INITIALIZE POOL');
    var conn = mysql.createPool(db_config);
    conn.on('connection', function (connection) {
        numConnectionsInPool++;
        console.log('NUMBER OF CONNECTION IN POOL : ', numConnectionsInPool);
    });
    return conn;
}




// handleDisconnect();
// handleDisconnect2();
// slaveHandleDisconnect2();


connection = initializeConnectionPool(db_config);
