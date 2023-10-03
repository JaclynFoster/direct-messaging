import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

const SECRET = process.env.SECRET

export const generateToken = credentials => {
return jwt.sign(
    {
        username: credentials.username,
        password: credentials.password
    },
    SECRET,
    {
        expiresIn: '24 hours'
    }
    )
}

export const getUser = () => {}

