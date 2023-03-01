const express = require('express');
const app = express.Router()
const {registerProduct,getProducts,deleteProduct,updateProduct,getProductById} = require("../controllers/product.controller")

app.post("/products/new",registerProduct)
app.get("/products", getProducts)
app.get("/products/:id",getProductById)
app.delete("/products/:id/delete",deleteProduct)
app.put("/products/:id/update", updateProduct)

module.exports = app