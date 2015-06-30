var express = require('express');
var dns = require('dns');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.send('Hello there!');
});

app.post('/', function(req, res) {
	var domain = req.body.text;
	dns.resolve4(domain, function (err, addresses) {
		if (err){
			res.send('This domain is availabel!');
		}
		else{
			res.send('This domain is not available!');
		}
	});
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})