const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
require('dotenv').config();
const cookiesParser = require('cookie-parser')
const router = require('./router/index');

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(cookiesParser())

app.get('/', (req, res) => {
    res.json({
        message : "Server is running at " + PORT
    });
}
)

//api endpoint
app.use('/api', router);


connectDB().then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

