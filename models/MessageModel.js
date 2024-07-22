const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    text:{
        type: String,
        default: '',
        required: true
    },
    imageUrl: {
        type: String,
        default: ''
    },
    videoUrl: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
})

const MessageModel = mongoose.model('Message', messageSchema)