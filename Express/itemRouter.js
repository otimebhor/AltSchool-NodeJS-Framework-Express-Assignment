const express = require('express');
const { createItem, getAllItems, getItem, updateItem} = require('./itemController');

const router = express.Router();

router.post('/items/create-item', createItem);
router.get('/items/get-all-items', getAllItems);
router.get('/items/:id', getItem);
router.put('/items/:id',updateItem);






const itemRouter = router;

module.exports = itemRouter;