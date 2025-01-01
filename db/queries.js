const pool = require("./pool");


const getMessages = async () => {
    const { rows } = await pool.query("SELECT id, username, message, TO_CHAR(date_added, 'YYYY-MM-DD HH24:MI') AS date_added FROM messages;");
    return rows;
}

const getMessageById = async (id) => {
    const { rows } = await pool.query("SELECT id, username, message, TO_CHAR(date_added, 'YYYY-MM-DD HH24:MI') AS date_added FROM messages WHERE id=$1;", [id]);
    return rows[0];
}

const addMessage = async (username, message, date) => {
    await pool.query("INSERT INTO messages (username, message, date_added) VALUES ($1, $2, $3);", [username, message, date])
}




module.exports = {
    getMessages,
    getMessageById,
    addMessage
}

