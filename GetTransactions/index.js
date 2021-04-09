const connectDB = require('../database/mongo');
const { getTransactions } = require('../controllers/transactions');

module.exports = async function (context, req) {

    connectDB();
    await getTransactions(context, req);
}