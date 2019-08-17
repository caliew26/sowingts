if (exists(myconfigfile) === true) {
    mypassword = require('myconfig');
  } else {
    mypassword = null
  };


module.exports = {
  "development": {
    "port": 3306,
    "host": "localhost",
    "username": "root",
    "password": mypassword,
    "database": "farmstand_db",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}



