'use strict';
var React = require('react')
  , cloneWithProps = require('react-clonewithprops')

module.exports = {

  propTypes: {
    onAction: React.PropTypes.func,
    delay:    React.PropTypes.number
  },

  getInitialState() {
    return {
      show: this.props.defaultShow == null ? true : this.props.defaultShow,
      disabled: !!this.props.delay
    }
  },

  renderButton(prop, classes){
    var handler = this._action.bind(null, prop)
      , text, Button;

    if (typeof this.props[prop] === 'string')
      text =  this.props[prop]

    Button = text 
      ? React.createElement('button', 
          { type: 'button', className: classes || '', }, text) 
      : this.props[prop]

    return cloneWithProps(Button, { 
      disabled: this.state.disabled,
      onClick: chain(handler, Button.props.onClick, this)
    })
  },

  renderAction(actionPair){
    var action  = actionPair.length === 2 ? actionPair[0] : null
      , button  = actionPair[1] || actionPair[0]
      , handler = this._action.bind(null, action)
      , text, Button;

    if (typeof button === 'string')
      text =  button

    Button = text 
      ? React.createElement('button', { type: 'button' }, text) 
      : button

    return cloneWithProps(Button, { 
      disabled: this.state.disabled,
      onClick: chain(handler, Button.props.onClick, this)
    })
  },

  visible() {
    return this.props.show != null ? this.props.show : this.state.show
  },

  _action(action, e){
    if ( this.props.onAction ) {
      this._changing = true;
      this.props.onAction.call(this, action)
      this._changing = false
    }

    this.setState({ show: !this.state.show })
  },

  _delay(props){
    if(!props.delay || !this.state.disabled) return

    this._timer = setTimeout(() => 
        this.setState({ disabled: false })
      , props.delay)
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !this._changing
  },

  componentWillMount() {
    this._delay(this.props) 
  },

  componentWillReceiveProps(nextProps) {
    this._delay(nextProps) 
  },
}


function chain(a,b, thisArg){
  return function(){
    a && a.apply(thisArg, arguments)
    b && b.apply(thisArg, arguments)
  }
}