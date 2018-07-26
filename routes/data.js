var express = require('express');

var app = express();

var Data = require('../models/data');

// =====================================
// GET DATA
// =====================================
app.get('/', (req, res, next) => {

    Data.find({})
        .exec(
            (err, data) => {
                console.log('data: ', data);

            if(err) {
                return res.status(500).json({
                    OK: false,
                    message: 'Error loading data',
                    errors: err
                });
            }
            res.status(200).json({
                OK: true,
                data: data
            });

        })
});


module.exports = app;