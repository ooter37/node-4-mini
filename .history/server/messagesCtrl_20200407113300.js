

let allMessages = []

module.exports = {
    getAllMessages: (req,res,next) => {
        res.status(200).send(allMessages)
    },
    createMessage: (req,res,next) => {
        const {username, message} = req.body
        const newMessage = {
            username,
            message
        }
        allMessages.push(newMessage)
        res.status(200).send(allMessages)
    }
}