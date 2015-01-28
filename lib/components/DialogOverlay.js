 'use strict';
var React = require('react')
  , Modal = require('react-bootstrap-modal/lib/Modal')
  , cloneWithProps = require('react-clonewithprops');

var Alert = React.createClass({displayName: "Alert",

  mixins: [
    require('../DialogMixin'),
  ],

  getDefaultProps:function() {
    return {
      actions: []
    }
  },

  render:function() {
    var $__0= 
        
       
          this.props,children=$__0.children,actions=$__0.actions,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{children:1,actions:1})

    props.show = this.visible()

    return (
      React.createElement(Modal, React.__spread({},  props , 
        {backdrop: "static", 
        closeButton: false, 
        onRequestHide: this._action.bind(null, 'cancel')}), 
        React.createElement("div", {className: "modal-body"}, 
          children 
        ), 
         actions && actions.length && 
          React.createElement("div", {className: "modal-footer"}, 
             actions.map( function(b, i)  {return cloneWithProps(this.renderAction(b), { key: i });}.bind(this)) 
          )
        
      )
    )
  }

});

module.exports = Alert;