const express = require('express');
const router = express.Router();
const bookRouter = require('../book/book.route');

router.use('api/v1/book', bookRouter);