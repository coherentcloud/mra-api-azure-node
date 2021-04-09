const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        context.log(`MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold);
    } catch (error) {
        context.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;