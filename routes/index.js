const routes = require('express').Router();
const ThingService = require('../services/ThingService')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});

routes.get('/things', (req, res) => {
  ThingService.list(res)
})

module.exports = routes;