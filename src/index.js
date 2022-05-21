const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/hi', (req, res) => {
  res.send('Hi:' + JSON.stringify(req.body))
})

app.use((req, res, next) => res.send('404 not found'))
app.listen(8080, () => {
  console.log('listening on port 8080!')
})