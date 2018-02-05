var netflixController = require('../controllers/netflixController')
var youtubeController = require('../controllers/youtubeController')
// var amazonController = require('../controllers/amazonController')
// make the controller modular
module.exports = {
	youtube: youtubeController,
	netflix: netflixController,
}
