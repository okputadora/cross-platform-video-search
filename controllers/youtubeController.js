var Promise = require('bluebird')
var search = require('youtube-search')
module.exports = {
  get: function(title){
    console.log('hittin the api')
    var opts = {
      maxResults: 5,
      key:'AIzaSyBG4M2kBGzsSyVfjdC_WkPQGqdp5IhGW3o'
    }
    console.log(opts.key)
    return new Promise(function(resolve, reject){
      search(title, opts, function(err, results){
        if (err){
          console.log(err)
          reject(err)
          return
        }
        console.log(results)
        resolve(results)
      })
    })
  }
}
