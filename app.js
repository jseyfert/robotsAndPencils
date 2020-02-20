var express = require('express')
var mongoose = require('mongoose')

var getLaunches = require('./controler/launch')
 
let app = express()
let port = 3000

mongoose.connect('mongodb+srv://jseyfert:12341234@cluster0-yr9ny.mongodb.net/spacex?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to DB');
    // var rocketOne = new Launch({ 
    //     rocket_name: 'rocketOne',
    //     land_success: true,
    //     reused: true,
    //     with_reddit: true,
    //  });
    // rocketOne.save(function (err, fluffy) {
    //     if (err) return console.error(err);
    // });
    // var rocketOne = new Launch({ 
    //     rocket_name: 'rocketTwo',
    //     land_success: false,
    //     reused: false,
    //     with_reddit: false,
    //  });
    //  rocketOne.save(function (err, fluffy) {
    //     if (err) return console.error(err);
    // });
});

app.get('/getLaunches', getLaunches)

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}/getLaunches`);
})