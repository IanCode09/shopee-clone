import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc    Fetch All Product
router.get('/', async (req, res) => {
    const products = await Product.find()

    res.json(products)
})

export default router