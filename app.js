var http = require('http');
var balance = require('./Modules/module3');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(balance.appendText() + balance.randomDollarAmount());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
