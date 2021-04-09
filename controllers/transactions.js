const Transaction = require("../models/transaction");

// @desc Get All Transactions
// @route   GET /api/v1/mra/transactions
// @access  Public

exports.getTransactions = async (context, req) => {
  try {
    const transactions = await Transaction.find();
    return context.res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return context.res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add Transaction
// @route   POST /api/v1/mra/transactions
// @access  Public

exports.addTransactions = async (context, req) => {
  try {
    const { description, amount, tran_type } = req.body;
    const transaction = await Transaction.create(req.body);

    return context.res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return context.res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return context.res.status(500).json({
        success: false,
        error: error.name,
      });
    }
  }
};

exports.deleteTransaction = async (context, req) => {
  try {

    var id = req.params.id;
    const transaction = await Transaction.findById(id, 
      function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
          console.log("Result : ", docs);
      }
    });

    if (!transaction) {
      return context.res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transaction.remove();

    return context.res.status(200).json({
      success: true,
      data: {},
    });
    
  } catch (error) {
    return context.res.status(500).json({
      success: false,
      error: error.name,
    });
  }
};
