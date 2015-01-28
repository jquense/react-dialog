'use strict';
var React = require('React')
//  , cloneWithProps = require('react-clonewithprops')
  , Promise = require('promiz')
  , Dialog =  require('../components/DialogOverlay')
  , Layer   = require('react-bootstrap-modal/lib/Layer');

module.exports = dialog


function dialog(_options) {

  return new Promise(function(resolve, reject){

    var layer = new Layer(document.body, function(){
      var $__0= 
          
         
            _options,onHidden=$__0.onHidden,content=$__0.content,options=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{onHidden:1,content:1})

      options.onAction = resolve
      options.onHidden = function()  { 
        layer.destroy()
        onHidden && onHidden()
      }

      return React.createElement(Dialog, options, content)
    })

    layer.render()
  })
}
