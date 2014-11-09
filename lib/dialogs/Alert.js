'use strict';
var React   = require('react')
  , Alert   = require('../components/Alert')
  , Promise = require('promiz')
  , Layer   = require('react-bootstrap-modal/lib/Layer');

module.exports = alert


function alert(message, title, accept) {
  var options = message

  if( typeof message === 'string')
    options = { title:title, message:message, accept:accept }

  return new Promise(function(resolve, reject){

    var layer = new Layer(document.body, function(){

      options.onAction = resolve
      options.onHidden = function()  {return layer.destroy();}

      return React.createElement(Alert, options, options.message)
    })

    layer.render()
  })
}
