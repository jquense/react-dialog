'use strict';

var React = require('react')
  , locale = require('../locale').alert
  , Dialog = require('./DialogOverlay.jsx');

var AlertTrigger = React.createClass({

  mixins: [
    require('react-bootstrap-modal/lib/OverlayMixin')
  ],

  propTypes: {
    accept:   React.PropTypes.node,
    show:     React.PropTypes.bool,
    onAction: React.PropTypes.func.isRequired,
  },

  getDefaultProps(){
    return {
      accept: locale.ACCEPT
    }
  },

  renderOverlay() {
    var {
        children
      , accept
      , onAction
      , ...props } = this.props;

    props.closeButton = false
    props.backdrop    = 'static'
    props.onAction    = () => onAction()

    props.actions = [
      ['accept', getButton(accept, 'btn btn-primary')]
    ]

    return <Dialog {...props}>{ children }</Dialog>
  },

  render(){
    return null
  }

});

module.exports = AlertTrigger;

function getButton(btn, classes) {
  return typeof btn === 'string' 
    ? React.createElement('button', { type: 'button', className: classes || '', }, btn) 
    : btn
}