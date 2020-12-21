import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import products from './data/products.js'
import users from './data/users.js'

dotenv.config()

connectDB()

const insertData = async () => {
    try {
        const createUsers = await User.insertMany(users)

        const productAdmin = createUsers[0]._id

        const createProducts = products.map((product) => {
            return { ...product, user: productAdmin }
        })

        await Product.insertMany(createProducts)

        console.log('Data Created Success');

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const removeData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Removed');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

if(process.argv[2] === '-r') {
    removeData()
} else {
    insertData()
}