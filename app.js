const express = require("express")
const app = express()

const port = process.env.PORT || 3002
const environment = process.env.NODE_ENV || "development"
const config = require("./knexfile.js")[environment]
const knex = require("knex")(config)
const dotenv = require("dotenv").config()
var cors = require('cors')
const parser = require('body-parser')

app.use(express.static('public'))

app.use(parser.json())
app.use(cors())

app.get('/', (req, res, next) => {
  return knex('users')
  .then(users => {
    const result = users.map(user => {
      return knex('blogpost').where({ user_id: user.id })
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
  return knex('blogpost')
  .then(posts => {
    res.send(posts)
  })
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

app.delete('/:id', (req,res, next) => {
  db('blogpost').where('id', req.params.id).del().returning('*')
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.put('/:id', (req,res, next) => {
  db('blogpost').update(req.body).where('id', req.params.id).returning('*')
  .then((rows) => {
    res.send(rows)
  })
  .catch((err) => {
    next(err)
  })
})

app.listen(port, () => console.log(`Porty on port ${port}!`))
