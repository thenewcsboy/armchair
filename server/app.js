const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use((request, response) => {
    response.json({ message : 'This is your server response.'});
});

app.use()

module.exports = app;