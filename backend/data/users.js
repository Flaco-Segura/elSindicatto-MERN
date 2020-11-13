import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'El Sindicatto',
        email: 'elsindicatto@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'CarMOD',
        email: 'carmod@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Ukelolo',
        email: 'ukelolo@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users