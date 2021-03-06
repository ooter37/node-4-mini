require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT} = process.env

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`)
})