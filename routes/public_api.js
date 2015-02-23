var express = require('express');
var youtube = require('youtube-feeds');
var router = express.Router();

router.get('/search', function(req, res) {
	var errs 	= [],
		query 	= {};

	if(req.query.hasOwnProperty('q') && req.query.q !== null){
		query['q'] = req.query.q;
	}else {
		errs.push('\'q\' field required !');
	}


	if(errs.length > 0){		
		res.json({errors: errs});
	}else {
		youtube.feeds.videos (req.query, function (err, result){
			res.json(result);
		});
	}

});

module.exports = router;
