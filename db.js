//const database = require("mime-db");

const knex = require('knex') ({
    client: 'mysql',

    connection: { //user e  password  de acordo com o cadastrado no DB 
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'webs'

    }
});

module.exports = knex 