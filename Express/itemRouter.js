const express = require('express');
const { createItem, getAllItems, getOneItem, updateItem, deleteItem } = require('./itemController');

const router = express.Router();

router.post('/items', createItem);
router.get('/items', getAllItems);
router.get('/items/:id', getOneItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);






const itemRouter = router;

module.exports = itemRouter;