

let allMessages = []

module.exports = {
    getAllMessages: (req,res,next) => {
        res.status(200).send(allMessages)
    },
    createMessage: (req,res,next) => {
        const {username, message} = req.body
        if (req.session.history) {
            req.session.history.push(newMessage)
        } else {
            req.session.history = []
            req.session.history.push(newMessage)
        }
        const newMessage = {
            username,
            message
        }
        allMessages.push(newMessage)
        res.status(200).send(allMessages)
    }
}