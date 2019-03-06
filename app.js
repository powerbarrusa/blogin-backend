const express = require("express")
const app = express()
const port = 3002
const environment = process.env.NODE_ENV || "development"
const knexconfig = require("./knexfile.js")[environment]
const db = require("knex")(knexconfig)

app.get('/', (req, res, next) => {
  return db('users')
  .then(users => {
    const result = users.map(user => {
      return db('blogpost').where({ user_id: user.id })
      .then(post => {
        user.posts = post
        return user
      })
    })  
    return Promise.all(result)
  }).then(data => {
    res.send(data)
  })
  .catch((err) => {
    next(err)
  })
})

app.get('/posts', (req, res, next) => {
  return db('blogpost')
  .then(posts => {
    res.send(posts)
  })
})

app.listen(port, () => console.log(`Porty on port ${port}!`))