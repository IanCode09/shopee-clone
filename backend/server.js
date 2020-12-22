import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('Backend Running ...')
})

app.use('/server/products', productRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server Running on PORT: ${PORT}`))