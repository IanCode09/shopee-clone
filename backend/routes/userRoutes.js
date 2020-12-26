import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import User from '../models/userModel.js'
import signToken from '../token/signToken.js'
import signMiddleware from '../middleware/signMiddleware.js'

// @desc   Auth User
router.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.passwordUser(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: signToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid user info')
    }
}))


// @desc   User Profile Login
router.get('/profile', signMiddleware, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
}))

export default router