import * as express from 'express'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

import { queryInvoke } from './services/pg'
import { encryptPassword } from './authentication/authentication'



const port = process.env.SERVER_PORT

const app = express()

app.use(express.json())
app.use(cors())

// const sqlSetup = async () => {
//     const results = await(queryInvoke(), [])
//     console.log("SQL Setup complete:", results)
// }

export const updatePassword = async (password, id) => {
    const hashPass = encryptPassword(password)
    const response = await queryInvoke(`UPDATE users SET password = $1 WHERE id = $2`, [hashPass, id]) 
    return response
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

