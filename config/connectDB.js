const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected');
        });
        connection.on('error', (error) => {
            console.log('MongoDB fail to connect');
        });
    } catch (error) {
        console.log('Error connecting to MongoDB');
        console.log(error);
    }
}
module.exports = connectDB;