const mongoose = require('mongoose');
const dbURL = "mongodb://localhost:27017/mail-service"

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message); 
    }
};

module.exports = connectDB;
