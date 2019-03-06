const express = require("express")
const app = express()
const port = 3002
const environment = process.env.NODE_ENV || "development";
const knexconfig = require("./knexfile.js")[environment];
const db = require("knex")(knexconfig);

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
  });
})

app.post('/', (req, res, next) => {
  db('blogpost').insert(req.body).returning('*')
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.listen(port, () => console.log(`Porty on port ${port}!`))
