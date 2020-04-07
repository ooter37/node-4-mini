

let allMessages = []

module.exports = {
    getAllMessages: (req,res,next) => {
        res.status(200).send(allMessages)
    },
    createMessage: (req,res,next) => {
        allMessages.push([req.body.username, req.body.message])
    }
}