const express = require('express');
const router = express.router();

//GetAll
router.get(('/', async (req, res) => {
    let body = {};
    let code = 200;

    try {
        let allBooks = await bookController.getAll();
        body.push({...allBooks});
    } catch (error) {
        code = error.code;
        body = error.body;
    } finally {
        res.status(code).send(body) 
    }
}))

//GetById
router.get(('/:bookId', async (req, res) => {
    let body = {};
    let code = 200;

    try {
        let book = await bookController.getById(req.params.bookId);
        body.push({...book});
    } catch (error) {
        code = error.code;
        body = error.body;
    } finally {
        res.status(code).send(body) 
    }
}))