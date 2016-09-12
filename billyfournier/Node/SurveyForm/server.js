// npm install express body-parser express-session

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser.urlencoded());
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
  response.render('index');
});
//
// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"},
//     ];
//     response.render('users', {users: users_array});
// });
//
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);

 res.render('result', { body: req.body } );
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
