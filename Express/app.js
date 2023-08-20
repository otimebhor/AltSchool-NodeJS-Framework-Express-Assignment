const express = require('express');
const bodyParser = require('body-parser');
const itemRouter = require('./itemRouter');


const PORT = 4000;
const app = express();

// app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(itemRouter);




app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.all('*', (req, res)=>{
    res.sendFile(__dirname + '/error.html')
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});