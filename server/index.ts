import * as express from 'express'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

import { queryInvoke } from './services/pg'



const port = process.env.SERVER_PORT

const app = express()

app.use(express.json())
app.use(cors())

// const sqlSetup = async () => {
//     const results = await(queryInvoke(), [])
//     console.log("SQL Setup complete:", results)
// }


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

