 'use strict';
var React = require('react')
  , Modal = require('react-bootstrap-modal/lib/Modal')
  , cloneWithProps = require('react-clonewithprops');

var DialogLayer = React.createClass({

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

  getDefaultProps() {
    return {
      actions: [],
      backdrop: 'static',
      closeButton: false,
    }
  },

  render() {
    var { 
        children
      , actions
      , ...props } = this.props

    props.show = this.visible()

    return (
      <Modal {...props }
        onRequestHide={this._action.bind(null, 'cancel')}>
        <div className="modal-body">
          { children }
        </div>
        { actions && actions.length && 
          <div className="modal-footer">
            { actions.map( (b, i) => cloneWithProps(this.renderAction(b), { key: i })) }
          </div>
        }
      </Modal>
    )
  },

  visible() {
    return this.props.show != null ? this.props.show : this.state.show
  },

  renderAction(actionPair){
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

});

module.exports = DialogLayer;

function chain(a,b, thisArg){
  return function(){
    a && a.apply(thisArg, arguments)
    b && b.apply(thisArg, arguments)
  }
}