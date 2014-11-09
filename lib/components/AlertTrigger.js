'use strict';

var React = require('react')
  , Alert = require('./Alert');

var AlertTrigger = React.createClass({displayName: 'AlertTrigger',

  mixins: [
    require('react-bootstrap-modal/lib/OverlayMixin')
  ],

  getDefaultProps:function(){
    return {
      accept: 'Ok'
    }
  },

  renderOverlay:function() {
    var $__0=
        
          this.props,children=$__0.children,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{children:1});

    return React.createElement(Alert, React.__spread({},  props), children )
  },

  render:function(){
    return null
  }

});

module.exports = AlertTrigger;