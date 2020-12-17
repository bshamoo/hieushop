import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Theodore Dixon',
        email: 'theo@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Matt Cock',
        email: 'matt@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users