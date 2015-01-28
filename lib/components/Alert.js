'use strict';

var React = require('react')
  , locale = require('../locale').alert
  , Dialog = require('./DialogOverlay');

var AlertTrigger = React.createClass({displayName: "AlertTrigger",

  mixins: [
    require('react-bootstrap-modal/lib/OverlayMixin')
  ],

  propTypes: {
    accept:   React.PropTypes.node,
    show:     React.PropTypes.bool,
    onAction: React.PropTypes.func.isRequired,
  },

  getDefaultProps:function(){
    return {
      accept: locale.ACCEPT
    }
  },

  renderOverlay:function() {
    var $__0=
        
       
       
          this.props,children=$__0.children,accept=$__0.accept,onAction=$__0.onAction,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{children:1,accept:1,onAction:1});

    props.closeButton = false
    props.backdrop    = 'static'
    props.onAction    = function()  {return onAction();}

    props.actions = [
      ['accept', getButton(accept, 'btn btn-primary')]
    ]

    return React.createElement(Dialog, React.__spread({},  props), children )
  },

  render:function(){
    return null
  }

});

module.exports = AlertTrigger;

function getButton(btn, classes) {
  return typeof btn === 'string' 
    ? React.createElement('button', { type: 'button', className: classes || '', }, btn) 
    : btn
}