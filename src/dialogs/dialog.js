'use strict';
var React = require('React')
//  , cloneWithProps = require('react-clonewithprops')
  , Promise = require('promiz')
  , Dialog =  require('../components/Dialog.jsx')
  , Layer   = require('react-bootstrap-modal/lib/Layer');

module.exports = dialog


function dialog(_options) {

  return new Promise(function(resolve, reject){

    var layer = new Layer(document.body, function(){
      var { 
          onHidden
        , content
        , ...options } = _options

      options.onAction = resolve
      options.onHidden = () => { 
        layer.destroy()
        onHidden && onHidden()
      }

      return React.createElement(Dialog, options, content)
    })

    layer.render()
  })
}
