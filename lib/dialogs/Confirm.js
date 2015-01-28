'use strict';
var React = require('react')
  , locale = require('../locale').confirm
  , dialog = require('./dialog');

module.exports = confirm

function confirm(content, title, accept, reject) {
  var options = { title:title, content:content }

  options.actions = [ 
    ['accept', getButton(accept || locale.ACCEPT, 'btn btn-primary')], 
    ['reject', getButton(reject || locale.REJECT, 'btn btn-link')] 
  ]

  return dialog(options).then( function(action)  {return action === 'accept';} )
}

function getButton(btn, classes) {
  return typeof btn === 'string' 
    ? React.createElement('button', { type: 'button', className: classes || '', }, btn) 
    : btn
}