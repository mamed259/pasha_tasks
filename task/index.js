const express = require('express');
const data = require('./user.json');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css',express.static(__dirname +'/css'));

app.post('/users', function (request, response) {
    let name = request.body.name;
    let surname = request.body.surname;
    console.log("User name = " + name + ", Surname = " + surname);
    response.json({"added": true});
});


app.get('/users', function (request, response) {
    response.json(data)
});

app.get('/usersList', function (request, response) {
    response.sendfile("index.html");
});

app.get('/', function (request, response) {
    response.send("Welcome to my application")
});



app.listen(3000, function () {
    console.log('available at http://localhost:3000');
});
