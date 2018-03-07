var express = require('express')
var ws = require('./ws')

var app = express(),
port = parseInt(process.env.PORT || config.server.port, 10)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})

app.listen(21560, function () {
  console.log('Example app listening on port ! '+port)
})
