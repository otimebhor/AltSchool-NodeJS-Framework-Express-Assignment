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




const saveItemData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('items.json', stringifyData)
}
//get the user data from json file
const getItemData = () => {
    const jsonData = fs.readFileSync('items.json')
    return JSON.parse(jsonData)   
};

module.exports = { createItem, getAllItems, getItem };