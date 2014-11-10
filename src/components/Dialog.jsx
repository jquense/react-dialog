'use strict';
var React = require('react')
  , DialogOverlay = require('./DialogOverlay.jsx');

var Dialog = React.createClass({

  mixins: [
    require('react-bootstrap-modal/lib/OverlayMixin')
  ],

  propTypes: {
    show:     React.PropTypes.bool,
    onAction: React.PropTypes.func.isRequired,
  },

  renderOverlay() {
    var {
        children
      , ...props } = this.props;

    return <DialogOverlay {...props}>{ children }</DialogOverlay>
  },

  render(){
    return null
  }

});

module.exports = Dialog;