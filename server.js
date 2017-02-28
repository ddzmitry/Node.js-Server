//import code 
var http = require('http');
//define port
var PORT = 7000;
var PORT2 = 7500;
//functin to handle

function handlereq(req,res){
	console.log(req.url)
	res.end('You are awesome!So cool!' + req.url );
}

//start server
var server = http.createServer(handlereq);


server.listen(PORT,function (req,res) {
	console.log('Server listerinig on port ' + PORT);

})

function handlereq2(req,res){
	console.log(req.url)
	res.end('You are bad! Not good anymore! ' +  req.url);
}

//start server
var server = http.createServer(handlereq2);


server.listen(PORT2,function (req,res) {
	console.log('Server listerinig on port ' + PORT2);

})