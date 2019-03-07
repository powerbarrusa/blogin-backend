module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/blogin-backend'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    }
};
  
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL
  //   }
}
