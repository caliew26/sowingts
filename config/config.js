// if (exists('myconfigfile') === true) {
//     mypassword = require('myconfigfile');
//   } else {
//     mypassword = null
//   };


module.exports = {
  "development": {
    "port": 3306,
    "host": "localhost",
    "username": "root",
    "password": "Potter!!13",
    "database": "farmstand_db",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}



