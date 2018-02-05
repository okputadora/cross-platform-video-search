const express = require('express')
const controllers = require('../controllers')
const router = express.Router()

router.get('/:resource', function(req, res, next){
  var title = req.query.title
  resource = req.params.resource
  console.log(resource)
  console.log(title)
  controller = controllers[resource]
  console.log(controller)
  if (controller == null){
    res.json({
      confirmation:'fail',
      message:'Invalid resource...check your spelling'
    })
    return
  }
  controller.get(title)
  .then(result => {
    res.json(result)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router
