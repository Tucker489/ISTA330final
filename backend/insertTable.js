const { Client } = require('pg');

const client = new Client({
	host: 'pg-212cf19a-ista-330-test.f.aivencloud.com',
	port: '18698',
	user: 'avnadmin',
	password: 'AVNS_45VzO5tOH4ki-NJaRgb',
	database: 'ISTA330Final',
	ssl: {
		rejectUnauthorized: false,
	}
});

client.connect(function (err) {
	if (err)
		throw err;
	client.query("INSERT INTO test VALUES ('Hello World!')", [], function (err, result) {
		if (err)
			throw err;
		console.log(result);
		client.end(function (err) {
			if (err)
				throw err;
		});
	});
});
