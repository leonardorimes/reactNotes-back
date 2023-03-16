const path = require("path");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    useNullAsDefault: true,

    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb) // funcionanlidade cascade com a foreign key
    },
    migrations:{
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    }
  },
 
};
