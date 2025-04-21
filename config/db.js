const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://arvind:123@cluster0.z8ebtrm.mongodb.net/notedb?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Database Connected Succesfully.');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;