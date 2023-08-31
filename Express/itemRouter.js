const express = require('express');
const { createItem } = require('./itemController');

const router = express.Router();

router.post('/items/create-item', createItem);







const itemRouter = router;

module.exports = itemRouter;