 'use strict';
var React = require('react')
  , Modal = require('react-bootstrap-modal/lib/Modal')
  , cloneWithProps = require('react-clonewithprops');

var Alert = React.createClass({

  mixins: [
    require('../DialogMixin'),
  ],

  getDefaultProps() {
    return {
      actions: []
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
        backdrop='static'
        closeButton={false}
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
  }

});

module.exports = Alert;