var express = require('express'),
    router = express.Router(),
    restrict = require('../auth/restrict'),
    audioService = require('../services/media-service');

router.get('/', restrict, function (req, res, next) {

    var vm = {
        title: 'Media Listing',
        firstName: req.user ? req.user.firstName : null
    };
    res.render('media', vm);
});

router.get('/audio/listings', restrict, function(req, res) {

    audioService.listDirectory(function(err, data) {

        if (err)
            return res.status(500).json({error: 'Failure retrieving directories.'});

        return res.json(data);
    });
});

router.get('/audio/listings/:id', restrict, function(req, res) {

    audioService.getMediaDetails(req.params.id, function(err, data) {

        if (err)
            return res.status(500).json({error: 'An error occurred.'});
        return res.json(data);
    });
});

module.exports = router;
