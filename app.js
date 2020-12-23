const express = require('express')
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser')
const multer = require('multer')
const morgan = require('morgan') // http logging middleware 
const session = require('express-session'); // login persistance
// const secrets = require('./config/secrets.json')
const fetch = require('node-fetch');

global.fetch = fetch;


const app = express()
// const port = 3000
const port = process.env.PORT || 3000

app.use(morgan('dev'));

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
  // origin: 'http://localhost:8080'
  origin: [process.env.APP_ADMIN, process.env.MAIN_APP, 'http://localhost:8181'],
}));


app.use('/', routes);


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})