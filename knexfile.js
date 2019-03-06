module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/blogin-backend'
<<<<<<< HEAD
  }
=======
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    }
>>>>>>> 3b62f335dee3a3cce33504ce3db827f4493c7afa
}