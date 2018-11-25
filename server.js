var express = require('express');
var exphbs  = require('express-handlebars');
const IOTA = require('iota.lib.js')


var app = express();
var hbs = exphbs.create({ /* config */ });
const iota = new IOTA({ provider: 'https://nodes.devnet.iota.org:443' })


// Register `hbs.engine` with the Express app.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(5000);
