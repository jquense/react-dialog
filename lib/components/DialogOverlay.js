 'use strict';
var React = require('react')
  , Modal = require('react-bootstrap-modal/lib/Modal')
  , cloneWithProps = require('react-clonewithprops');

var DialogLayer = React.createClass({displayName: "DialogLayer",

  propTypes: {
    onAction: React.PropTypes.func,
    delay:    React.PropTypes.number
  },

  getInitialState:function() {
    return {
      show: this.props.defaultShow == null ? true : this.props.defaultShow,
      disabled: !!this.props.delay
    }
  },

  getDefaultProps:function() {
    return {
      actions: [],
      backdrop: 'static',
      closeButton: false,
    }
  },

  render:function() {
    var $__0= 
        
       
          this.props,children=$__0.children,actions=$__0.actions,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{children:1,actions:1})

    props.show = this.visible()

    return (
      React.createElement(Modal, React.__spread({},  props , 
        {onRequestHide: this._action.bind(null, 'cancel')}), 
        React.createElement("div", {className: "modal-body"}, 
          children 
        ), 
         actions && actions.length && 
          React.createElement("div", {className: "modal-footer"}, 
             actions.map( function(b, i)  {return cloneWithProps(this.renderAction(b), { key: i });}.bind(this)) 
          )
        
      )
    )
  },

  visible:function() {
    return this.props.show != null ? this.props.show : this.state.show
  },

  renderAction:function(actionPair){
    var action  = actionPair.length === 2 ? actionPair[0] : null
      , button  = actionPair[1] || actionPair[0]
      , handler = this._action.bind(null, action)
      , text, Button;

    if (typeof button === 'string')
      text = button

    Button = React.isValidElement(button) 
      ? button
      : React.createElement('button', { type: 'button' }, text) 

    return cloneWithProps(Button, { 
      disabled: this.state.disabled,
      onClick: chain(handler, Button.props.onClick, this)
    })
  },

  

  _action:function(action, e){
    if ( this.props.onAction ) {
      this._changing = true;
      this.props.onAction.call(this, action)
      this._changing = false
    }

    this.setState({ show: !this.state.show })
  },

  _delay:function(props){
    if(!props.delay || !this.state.disabled) return

    this._timer = setTimeout(function()  
        {return this.setState({ disabled: false });}.bind(this)
      , props.delay)
  },

  shouldComponentUpdate:function(nextProps, nextState) {
    return !this._changing
  },

  componentWillMount:function() {
    this._delay(this.props) 
  },

  componentWillReceiveProps:function(nextProps) {
    this._delay(nextProps) 
  },

});

module.exports = DialogLayer;

function chain(a,b, thisArg){
  return function(){
    a && a.apply(thisArg, arguments)
    b && b.apply(thisArg, arguments)
  }
}