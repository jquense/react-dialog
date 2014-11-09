'use strict';
var React = require('react')
  , Confirm = require('./Confirm');

var ConfirmTrigger = React.createClass({displayName: 'ConfirmTrigger',

  mixins: [
    require('react-bootstrap-modal/lib/OverlayMixin')
  ],

  getDefaultProps:function(){
    return {
      accept: 'Yes',
      reject: 'No'
    }
  },

  renderOverlay:function() {
    var $__0=
        
          this.props,children=$__0.children,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{children:1});

    return React.createElement(Confirm, React.__spread({},  props), children )
  },

  render:function(){
    return null
  }

});

module.exports = ConfirmTrigger;