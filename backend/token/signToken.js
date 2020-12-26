import jwt from 'jsonwebtoken'

const signToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.PRIVATE_KEY, 
        { expiresIn: '5d'}
    )
}

export default signToken