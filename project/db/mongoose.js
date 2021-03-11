
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://team301:301@cluster0.kp55r.mongodb.net/301project?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = { mongoose } 