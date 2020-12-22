import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend Running ...')
})

app.use('/server/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server Running on PORT: ${PORT}`))