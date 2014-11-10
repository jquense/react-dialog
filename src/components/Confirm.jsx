'use strict';
var React = require('react')
  , locale = require('../locale').confirm
  , Dialog = require('./DialogOverlay.jsx');

var ConfirmTrigger = React.createClass({

  mixins: [
    require('react-bootstrap-modal/lib/OverlayMixin')
  ],

  propTypes: {
    accept:   React.PropTypes.node,
    reject:   React.PropTypes.node,
    show:     React.PropTypes.bool,
    onAction: React.PropTypes.func.isRequired,
  },

  getDefaultProps(){
    return {
      accept: locale.ACCEPT,
      reject: locale.REJECT
    }
  },

  renderOverlay() {
    var {
        children
      , accept
      , reject
      , onAction
      , ...props } = this.props;

    props.closeButton = false
    props.backdrop    = 'static'
    props.onAction    = (action) => onAction(action === 'accept')

    props.actions = [
      ['accept', getButton(accept, 'btn btn-primary')],
      ['reject', getButton(reject, 'btn btn-link')]
    ]

    return <Dialog {...props}>{ children }</Dialog>
  },

  render(){
    return null
  }

});

module.exports = ConfirmTrigger;

function getButton(btn, classes) {
  return typeof btn === 'string' 
    ? React.createElement('button', { type: 'button', className: classes || '', }, btn) 
    : btn
}