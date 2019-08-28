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

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "cli-example",
//     "host": "127.0.0.1",
//     "port": 3306,
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "port": 3306,
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "port": 3306,
//     "dialect": "mysql"
//   }
// }


