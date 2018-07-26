var express = require('express');

var app = express();

var Person = require('../models/person');

// =====================================
// GET PEOPLE
// =====================================
app.get('/', (req, res, next) => {

    Person.find({})
        .exec(
            (err, person) => {

            if(err) {
                return res.status(500).json({
                    OK: false,
                    message: 'Error loading person',
                    errors: err
                });
            }
            res.status(200).json({
                OK: true,
                person: person
            });

        })
});


module.exports = app;