import bcrypt from 'bcrypt'

const users = [
    {
        name: 'Admin',
        email: 'admin@test.com',
        password: bcrypt.hashSync('admin123', 10) ,
        isAdmin: true
    },

    {
        name: 'Ian',
        email: 'ian@test.com',
        password: bcrypt.hashSync('ian123', 10) ,
        isAdmin: true
    },

    {
        name: 'Saduk',
        email: 'saduk@test.com',
        password: bcrypt.hashSync('saduk123', 10) ,
        isAdmin: false
    }
]

export default users