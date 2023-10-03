import * as express from 'express'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })
import { Sequelize } from 'sequelize-typescript'

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env

export const sequelize = new Sequelize({
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_NAME,
    dialect: 'postgres',
    dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
    }
})

const port = process.env.SERVER_PORT

const app = express()

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

