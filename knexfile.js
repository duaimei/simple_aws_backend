module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'aws_backend',
      user: 'aws',
      password: 'backend',
      schema: 'my_schema'
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
    // ,
    // pool: {
    //   afterCreate: (conn, cb) => {
    //     conn.run('PRAGMA foreign_keys = ON', cb);
    //   }
    // }
  },

  production: {
    client: 'postgresql',
    debug: true,
    connection: process.env.DATABASE_URL,
    // connection: {
    //   database: process.env.DB_NAME,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   schema: process.env.DB_SCHEMA
    // },
    migrations: {
      directory: "./db/migrations"
    },
    ssl: true,
    seeds: {
      directory: "./db/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
