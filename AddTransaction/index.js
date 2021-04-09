const Transaction = require('../models/transaction');
const connectDB = require('../database/mongo');
const { addTransactions } = require('../controllers/transactions');

module.exports = async function (context, req) {
    connectDB();
    await addTransactions(context, req);
}