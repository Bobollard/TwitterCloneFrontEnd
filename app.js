var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('MySql Orm listening at http://%s:%s', host, port)
});

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'local',
	user: 'root',
	password: 'admin'
});