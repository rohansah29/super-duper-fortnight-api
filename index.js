var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.text())

app.post('/test', function (req, res, next) {
  console.log(req.body)
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})