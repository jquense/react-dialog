'use strict';
var React   = require('react')
  , Confirm = require('../components/Confirm')
  , Promise = require('promiz')
  , Layer   = require('react-bootstrap-modal/lib/Layer');

module.exports = alert


function alert(message, title, accept) {
  var options = message

  if( typeof message === 'string')
    options = { title:title, message:message, accept:accept }

  return new Promise(function(resolve, reject){

    var layer = new Layer(document.body, function(){

      options.onAction = function(action)  {return resolve(action === 'accept');}
      options.onHidden = function()  {return layer.destroy();} 

      return React.createElement(Confirm, options, options.message)
    })

    layer.render()
  })
}
