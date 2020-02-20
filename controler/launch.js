var Launch = require('../model/launch')

const launchControler = (req, res, next) => {
    const filter = req.query.filter

    if (filter === 'land_success') {
        return Launch.find({ land_success: true}, function (err, launch) {
            if (err) return console.error(err);
            res.json(launch)
        })
    }

    if (filter === 'with_reddit') {
        return Launch.find({ with_reddit: true}, function (err, launch) {
            if (err) return console.error(err);
            res.json(launch)
        })
    }

    if (filter === 'reused') {
        return Launch.find({ reused: true}, function (err, launch) {
            if (err) return console.error(err);
            res.json(launch)
        })
    }

    return Launch.find( function (err, launch) {
        if (err) return console.error(err);
        res.json(launch)
    })
}

module.exports = launchControler;