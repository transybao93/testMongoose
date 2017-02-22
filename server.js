var express = require('express');
var app = express();
var mongoose = require('mongoose');
var uri = 'mongodb://transybao:transybao@ds157479.mlab.com:57479/testing';
//set static path
app.use(express.static('public'));

/**
 * Express
 */
//express routing
app.get('/', function (req, res) {
   res.sendFile(__dirname +'/index.html');
})
//express port
var port = process.env.PORT || 8000;
app.listen(port, function(){
	console.log('Running at port: ' + port);
});



/**
 * Mongoose
 */
mongoose.connect(uri, function(error) {
	if(!error)
	{
		console.log('Connected to mLab database !');
	}else{
		console.log('Error...');
	}
  // Check error in initial connection. There is no 2nd param to the callback.
});






