//Static Express Server Components
const express = require('express');
const http = require('http');
const hbs = require('hbs');

//Create HTTP Server
const app = express();
const server = http.Server(app);

//Use bodyParser on [parse from client -> get to server]
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTER
// router rendering looks up for a views file
// specify view AND partial folders and parse the engine to hbs.
app.set('views',`${__dirname}/../app/views`);
hbs.registerPartials(`${__dirname}/../app/views/partials`);
app.set('view engine', 'hbs');

app.get('/', function(req,res) {
    res.render('index');
});

//Server “app” directory
app.use(express.static(`${__dirname}/../app`));

//Server “node_modules” directory
app.use('/modules',
    express.static(`${__dirname}/../node_modules`));

//Start Server
server.listen( 8888, () => console.log("Running on localhost:8888"));