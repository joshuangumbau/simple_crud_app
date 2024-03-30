const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from NodeAPI server updated");
})

mongoose.connect("mongodb+srv://admin:dbuserpassword@backenddb.slclbtc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("connected to the database");
})

.catch(() => {
    console.log("connection to the database failed");
});