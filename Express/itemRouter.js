const express = require('express');
const { createItem, getAllItems, getItem} = require('./itemController');

const router = express.Router();

router.post('/items/create-item', createItem);
router.get('/items/get-all-items', getAllItems);
router.get('/items/:id', getItem);






const itemRouter = router;

module.exports = itemRouter;