const express = require('express');
var router = express.Router();
//require('../models/employee.model')
const mongoose = mongoose.model('Employee');

router.get('/', (req,res) => {
    res.render('employee/addOrEdit',{
        viewTitle : 'Insert Employee'
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res){
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.userName = req.body.userName;
    employee.password = req.body.password;
    employee.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');
            //console.log('Done!')
            }
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    res.json('from list');
})

module.exports = router;

//module.exports = model('Employee', employeeSchema);