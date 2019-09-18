const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(8);
var hash = bcrypt.hashSync('B4c0/\/', salt);

const db = require('../database/dbConfig.js');
const Users = require('../users/users-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("Up and Running!");
});

module.exports = server;