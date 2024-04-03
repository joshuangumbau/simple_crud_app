const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.models');
const product = require('./models/product.models');
const app = express()

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello from NodeAPI server updated");
});

app.get('/api/products', async(req,res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
});

// app.get('/api/products/:id', async(req,res) =>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
        
//     }
// });

app.get('/api/products/:id', async(req,res) =>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
});


app.post('/api/products', async (req,res) => {
    try {
        const product  = await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json(
            {
                message: error.message
            }
        );
    }
})

mongoose.connect("mongodb+srv://admin:dbuserpassword@backenddb.slclbtc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("connected to the database");
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
    
})

.catch(() => {
    console.log("connection to the database failed");
});