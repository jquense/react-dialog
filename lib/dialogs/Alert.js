'use strict';
var React   = require('react')
  , locale = require('../locale').alert
  , dialog = require('./dialog');

module.exports = alert


function alert(content, title, accept) {
  var options = { title:title, content:content }

  options.actions = [ 
    ['accept', getButton(accept || locale.ACCEPT, 'btn btn-primary')]
  ]

  return dialog(options).then(function()  {})
}


function getButton(btn, classes) {
  return typeof btn === 'string' 
    ? React.createElement('button', { type: 'button', className: classes || '', }, btn) 
    : btn
}