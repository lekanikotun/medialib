var fs = require("fs"),
    audioMetaData = require('audio-metadata');

var audioService = (function() {

    var url = './public/media/audio/';

    var cached;

    function getAudioData(path, files) {

        var metadataArr = [];
        for(var i= 0, l = files.length; i<l; i++) {
            var mp3Data = fs.readFileSync(path + files[i]);
            var metadata = audioMetaData.id3v1(mp3Data);
            metadata.filename = files[i];
            metadata.path = path;
            metadata.fullpath = '/media/audio/' + files[i];
            metadata.id = i+1;
            metadataArr.push(metadata);
        }

        return metadataArr;
    }

    return {

        listDirectory: function(cb) {

            if (typeof cached !== 'undefined' && cached.length) {
                return cb(null, cached)
            }

            fs.readdir(url, function (err, files) {

                if (err)
                    return cb(err);

                try {
                    var filesArray = getAudioData(url, files);
                    cached = filesArray;
                    cb(null, filesArray);
                } catch(err) {
                    cb(err);
                }

            });
        },

        getMediaDetails: function(audioId, cb) {

            audioService.listDirectory(function(err, data) {

                if (err)
                    return cb(err);

                try {
                    var result = data.filter(function(obj) {
                        return obj.hasOwnProperty('id') && obj.id == audioId;
                    });

                    cb(null, result[0]);
                } catch(err) {
                    cb(err);
                }

            });
        }
    }

}());

module.exports = audioService;