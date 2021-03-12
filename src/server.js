const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(routes);

app.listen(8080, () => console.log("Server is running (: ✌"));