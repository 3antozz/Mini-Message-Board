const db = require("../db/queries");

function formatTimestamp(date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')  // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const getMessages = async (req, res) => {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
};

const getDetails = async (req, res) => {
    const index = req.params.index;
    const message = await db.getMessageById(index);
    res.render("details", {
        title: "Message details",
        message: message,
    });
};

const addMessage = async (req, res) => {
    const username = req.body.messageUser;
    const message = req.body.messageText;
    const date = formatTimestamp(new Date());
    await db.addMessage(username, message, date);
    res.redirect("/")
}

module.exports = {
    getMessages,
    getDetails,
    addMessage
};
