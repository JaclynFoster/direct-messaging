import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })
import { queryInvoke } from '../services/pg'
import { comparePassword, encryptPassword } from '../authentication/authentication'

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

export const getUser = async (req, res) => {
    const {username, password} = req.query
    console.log("My getUser query:", req.query)
    try {
        const response = await queryInvoke(
        `SELECT * FROM users WHERE username = $1`,
        [username]
        )
        console.log('Get User Response:', response)
        if (response.rows.length > 0 && comparePassword(response.rows[0].password, password))
        {
        let token = generateToken(req.body)
        console.log("My Token:", token)
        res.status(200).send({token, data: response.rows[0]})
        } else {
        res.status(401).send("User unable to be found with these credentials. Please try again.")
        }
    }
        catch (error) {
        console.log("Error on getUser:", error)
        res.sendStatus(500)
        }

}

export const createUser = async (req, res) => {
    const { first_name, last_name, email, username, password } = req.body
    console.log('Create User req.body', req.body)
    try {
    const dbUser = await queryInvoke(
      `SELECT * FROM users WHERE username = $1`,
        [username]
    )
    console.log('dbUser exists:', dbUser.rows.length)
    if (dbUser.rows.length > 0) {
        res.status(400).send('Username already exists.')
        return
    } else {
        const hashPass = encryptPassword(password)
        const response = await queryInvoke(
        `INSERT INTO users (first_name, last_name, email, username, password)
                VALUES ($1, $2, $3, $4, $5)`,
        [first_name, last_name, email, username, password]
        )
        let token = generateToken(req.body)
        console.log('CreateUser Token:', token)
        res.status(200).send({ token, data: response.rows[0] })
    }
    } catch (error) {
    console.log('Error CreateUser:', error)
    res.sendStatus(500)
    }
}


