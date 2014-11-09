'use strict';

require('react-bootstrap-modal/lib/bbm-complete.css')
require('../src/bootstrap-buttons.less')

var React   = require('react')
  , Alert   = require('../src/components/Alert.jsx')
  , Confirm = require('../src/components/Confirm.jsx')
  , alertDialog   = require('../src/dialogs/alert')
  , confirmDialog = require('../src/dialogs/confirm')
  ;

var Container = React.createClass({
  getInitialState: function(){ 
    return { show: false, alert: false, confirm: false }
  },

  render() {

    return (
      <div>
        <h4>Dialogs</h4>
        <button className='btn btn-primary' onClick={confirm.bind(this)}>confirm me</button>
        <button className='btn btn-primary' onClick={alert.bind(this)}>alert me</button>
        <hr/>
        <h4>Triggers</h4>
        <button className='btn btn-primary' onClick={toggle.bind(this, 'confirm')}>confirm me</button>
        <button className='btn btn-primary' onClick={toggle.bind(this, 'alert')}>alert me</button>

        <Confirm show={this.state.confirm} onAction={toggle.bind(this, 'confirm')}>Hello! Yes or No?</Confirm>
        <Alert show={this.state.alert} onAction={toggle.bind(this, 'alert')}>Hello!</Alert>

      </div>
    );

    function toggle(type, anseer){
      var st ={}
      st[type] = !this.state[type]
      this.setState(st)
      console.log(anseer)
    }

    function alert(){
      alertDialog(<h3>Very Large</h3>, '',  Accept )
        .then(() => console.log('alerted'))
    }

    function confirm(){
      confirmDialog('hello', 'fancy Title',  Accept )
        .then(function(answer){
          console.log('anseer', answer)
        })  
    }
  }

});

var Accept = <button type='button' className='btn btn-primary'>DO IT</button>


React.render(<Container/>, document.body);


        // <Alert show={show} delay={4000} onAction={onAction.bind(this)}>
        //   <h4>Attention!</h4>
        //   <p>
        //     very super important message for you attention
        //   </p>
        // </Alert>