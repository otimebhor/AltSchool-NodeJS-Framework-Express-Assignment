const fs = require('fs');


const createItem = (req, res) => {
          //get the existing items
    const items = getItemData()
      const item = req.body;

       //append the item data
    items.push(item)
    //save the new user data
    saveItemData(items);
    return res.status(201).json({
        data: items,
        error: null
    })


};
const getAllItems = (req, res) => {
    const items = getItemData()
    res.send(items);
};

const getItem = (req, res) => {
    const id = req.params.id 

    const items = getItemData()
    const item = items.find((item)=>{
        return item.id == parseInt(id)
    })
    if(!item){
        res.status(404).send(`Item not found`)
    }
    res.status(200).json(item)
};

const updateItem = (req, res) => {
    const id = req.params.id
    //get the update item
    const item = req.body
    //get the existing items
    const items = getItemData()
    //check if the item exist    
    const findItem = items.find( item => item.id === parseInt(id) )
    if (!findItem) {
        return res.status(409).send({error: true, msg: 'item does not exist'})
    }
    //filter the items
    const updateItem = items.filter( item => item.id === parseInt(id))
    //push the updated item
    updateItem.push(item)
    //finally save it
    saveItemData(updateItem)
    res.send({success: true, msg: 'Item updated successfully'})


};


const saveItemData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('items.json', stringifyData)
}
//get the item data from json file
const getItemData = () => {
    const jsonData = fs.readFileSync('items.json')
    return JSON.parse(jsonData)   
};

module.exports = { createItem, getAllItems, getItem, updateItem};