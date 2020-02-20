var express = require('express')
var mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected to DB');
    });
}

module.exports = connectDB;