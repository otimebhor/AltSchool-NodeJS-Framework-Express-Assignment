const express = require('express')

const fs = require('fs');
const path = require('path');

// const itemsDb = path.join(__dirname,  'items.json');

const items = [];

// create item
const createItem = (req, res) => {

    const item = req.body;
    items.push(item)

    return res.status(201).json({
        data: items,
        error: null
    })
};

const getAllItems = (req, res) => {
    res.json(items)
};

const getOneItem = (req,res)=>{
    const id = req.params.id 
    const oneItem = items.find((item)=>{
        return item.id == parseInt(id)
    })
    if(!oneItem){
        res.status(404).send(`Item not found`)
    }
    res.status(200).json(oneItem)
}

const updateItem = (req, res)=>{
    const id = req.params.id
    const update = req.body
    const foundIndex = items.findIndex(item=>item.id == parseInt(id))
    if(foundIndex== -1){
        res.end(`item with id ${id} is not found`)
        return
    }
    items[foundIndex] = {...items[foundIndex], ...update}
    res.status(200).json(items[foundIndex])
}

const deleteItem = (req,res)=>{
    const id = req.params.id
    const foundIndex = items.findIndex(item=>item.id == parseInt(id))
    if(foundIndex== -1){
        res.end(`item with id:${id} is not found`)
        return
    }
    students.splice(foundIndex, 1)
    res.end(`item with id:${id}, deleted successfully`)
}


module.exports = {
    createItem,
    getAllItems,
    getOneItem,
    updateItem,
    deleteItem
}

