const connection = require('./db')
const express = require('express')
const router = express.Router()
const ProductController = require('./ProductController')

router.post('/novoProduto',ProductController.newProduct)

router.get('/listarProdutos',ProductController.listProduct)

router.get('/listarProduto/:id',ProductController.listUmProduto)

router.put('/editarProduto/:id',ProductController.updateProduto)

router.delete('/deletarProduto/:id',ProductController.delProduto)

module.exports = router