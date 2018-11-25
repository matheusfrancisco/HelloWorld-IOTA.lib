var express = require('express');
var exphbs  = require('express-handlebars');
const IOTA = require('iota.lib.js')

var mySeed =  'QNCAMQPJVIKXDJQHYLMIYIXHWG9X9FTRDLTYYFMBZBSEQOKSDB9RHVITDGGNCKWFGSRZVRFHGUSXNKMLU';

var bodyParser = require('body-parser');
var app = express();
var hbs = exphbs.create({ /* config */ });
const iota = new IOTA({ provider: 'https://nodes.testnet.iota.org:443' })


// Register `hbs.engine` with the Express app.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('home', {title: 'Começando com Iota.lib.js'});
});


app.post('/ligarluz',function (req,res) {
	var address;
	//address =  genAddress();
	
	var luz =  req.body.luz;
	let message = iota.utils.toTrytes('Obrigado por ligar a Luaz!')

	if(luz = 'ON')
	{
	var transfer = [{
            'address': 'GIBHNJQCAVTAZFRMFZLYNYHQHVJVYXUZRAGWNEHSFQERHBYSCOJXSOKOLIHLWITVNBCMGONUCKZLHZLACPCRSEPQOX',
            'value': parseInt(0),
            'message': message
        }]

        console.log("Sending Transfer", transfer);

        // We send the transfer from this seed, with depth 4 and minWeightMagnitude 18
        iota.api.sendTransfer(mySeed, 4, 9, transfer, function(e) {

            if (e){

              	        res.render('error', {error:'Deu merda'});

            } else {

                res.render('luz', {ligada:'A luz ficara ligada por 1 hora'});
            }
        })
		
	}
	else
	{

	        res.render('error', {error:'Deu merda'});
	}

});

app.post('/ligarlcd',function (req,res) {
	var address;
	//address = genAddress();
	
	var luz =  req.body.lcd;
	let message = iota.utils.toTrytes('Obrigado por ligar a Luaz!')

	if(lcd = 'ON')
	{
	var transfer = [{
            'address': 'GIBHNJQCAVTAZFRMFZLYNYHQHVJVYXUZRAGWNEHSFQERHBYSCOJXSOKOLIHLWITVNBCMGONUCKZLHZLACPCRSEPQOX',
            'value': parseInt(0),
            'message': message
        }]

        console.log("Sending Transfer", transfer);

        // We send the transfer from this seed, with depth 4 and minWeightMagnitude 18
        iota.api.sendTransfer(mySeed, 4, 9, transfer, function(e) {

            if (e){
			        res.render('error', {error:'Deu merda'});
              

            } else {

                res.render('lcd', {ligado:'A lcd esta ligado'});
            }
        })
		
	}
	else
	{

	        res.render('error', {error:'Deu merda'});
	}

});

app.post('/opendoor',function (req,res) {
var address;
	address =  genAddress();
	
	var door =  req.body.porta;
	var pessoa = req.body.pessoa;
	let message = iota.utils.toTrytes('Obrigado por abrir a porta!')

	if(door = 'OPEN')
	{
	var transfer = [{
            'address': 'GIBHNJQCAVTAZFRMFZLYNYHQHVJVYXUZRAGWNEHSFQERHBYSCOJXSOKOLIHLWITVNBCMGONUCKZLHZLACPCRSEPQOX',
            'value': parseInt(0),
            'message': message
        }]

        console.log("Sending Transfer", transfer);

        // We send the transfer from this seed, with depth 4 and minWeightMagnitude 18
        iota.api.sendTransfer(mySeed, 4, 9, transfer, function(e) {

            if (e){

              	        res.render('error', {error:'Deu merda'});

            } else {
		
                res.render('opendoor', {open:'Porta esta aberta', pessoa: pessoa});
            }
        })
		
	}
	else
	{

	        res.render('error', {error:'Deu merda'});
	}

});

app.get('/iotainfo',function (req,res) {
	iota.api.getNodeInfo((error, success) => {
	  if (error) {
	    console.log(error)
	  } else {
	    var sucess= JSON.stringify(success);
	    console.log(success)
		res.render('nodeinfo', {valor:JSON.stringify(sucess)});
	  }
	})
});

 async   function genAddress() {

        console.log("Generating an address");

        await iota.api.getNewAddress(mySeed, {'checksum': true}, function(e,address) {

             if (!e) {

                console.log("NEW ADDRESS GENERATED: ", address)

                var address =  address;
                // Update the HTML on the site
                return address;
            }
        })
    }



app.listen(8080, function (){
    console.log("Listening on *:8080")
})

