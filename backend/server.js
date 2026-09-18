import express from 'express'
import authRoutes from './routes/auth.routes.js'
import dotnev from 'dotenv'
import cookieParser from 'cookie-parser'
import dns from "node:dns/promises"
import connectMongoDB from './db/connectMongoDB.js'
dns.setServers(["1.1.1.1"])
dotnev.config()
const app = express()
const PORT = process.env.PORT ||5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
    connectMongoDB()
})