const connectDB = require('../database/mongo');
const { deleteTransaction } = require("../controllers/transactions");

module.exports = async function (context, req) {

    connectDB();
    await deleteTransaction(context, req);
}