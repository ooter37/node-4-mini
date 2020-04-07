require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const {getAllMessages, createMessage, history} = require('./messagesCtrl')

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))


app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`)
})

app.get('/api/messages', getAllMessages)
app.post('/api/message', createMessage)
app.get('/api/messages/history', history)