const express = require('express');
const fetch = require("node-fetch");
const app = express();
const path = require("path");
const port = 8080;
const hostname = "0.0.0.0";

// Static Files
app.use(express.static('ui'));
// Specific folder example
app.use('/css', express.static(path.join(__dirname, 'ui/css')));
app.use('/js', express.static(path.join(__dirname, 'ui/js')));
app.use('/img', express.static(path.join(__dirname, 'ui/img')));
app.use('/geojson', express.static(path.join(__dirname, 'ui/geojson')));

// Set View's
app.set('views', path.join(__dirname, "ui"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Navigation
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/table', (req, res) => {
	res.render('table');
});

app.get('/graph', (req, res) => {
	res.render('graph');
});

app.get('/map', (req, res) => {
	res.render('map');
});

app.get('/graphql', (req, res) => {
	fetch(`http://graphqlnetwork:4000`, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		  "X-Shopify-Access-Token": "<access-token>"
		},
		body: JSON.stringify(req.query)
	  })
		.then(result => {
		  return result.json();
		})
		.then(data => {
		  res.send(data);
	});
});

app.listen(port, hostname, () => console.info(`🚀 App listening on port ${port}`));
