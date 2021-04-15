const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'PadmeDoreen2015',
  database : 'Gareth_Project'
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('Database Connected');
  });

  module.exports = connection;