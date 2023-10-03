import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })
import { Client } from 'pg'

export const queryInvoke = async (query, params) => {
    try {
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    })
    await client.connect()
    const result = await client.query(query, params)
    await client.end()
    return result
    } catch (error) {
    console.log('[queryInvoke] error:', error)
    throw error
    }
}
