const express = require('express');
const { createItem, getAllItems } = require('./itemController');

const router = express.Router();

router.post('/items/create-item', createItem);
router.get('/items/get-all-items', getAllItems);







const itemRouter = router;

module.exports = itemRouter;