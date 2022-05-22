
const express = require('express')
const router = express.Router()
const moment = require('moment')
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const adapter = new FileSync("db/database.json");
const db = low(adapter);

db.defaults({ posts: [] }).write()

router.get('/', (req, res, next) => {
  if(req.query.search_text) {
    const posts = db.get('posts').find({content: req.query.search_text}).value()
    res.send(posts)
  } else {
    const posts = db.get('posts').value()
    console.log(posts)
    res.send(posts)
  }
})

router.post('/', (req, res, next) => {
  const article = {
    id: db.get('posts').size().value() + 1,
    created_at: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
    ...req.body
  }
  db.get('posts').push(article).write()
  res.send(article)
})

module.exports = router