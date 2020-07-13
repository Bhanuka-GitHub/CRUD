const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    }
});

mongoose.model('Employee', employeeSchema);