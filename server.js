var express = require('express');

// Create our app
const path = require('path')
var app = express();

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});