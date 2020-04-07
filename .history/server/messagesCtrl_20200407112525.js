let allMessages = []

module.exports = {
    getAllMessages: (req,res,next) => {
        res.status(200).send(allMessages)
    }
}