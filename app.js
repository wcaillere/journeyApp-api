const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');

/*
const jwt = require('jsonwebtoken');

const SECRET_KEY = '123456789';
const expiresIn = '1h';
const db = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'));
 */

const server = jsonServer.create();
const router = jsonServer.router('./db.json');

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());

server.use(router);

server.listen(3000, () => {
    console.log('Run JourneyApp API Server');
});

