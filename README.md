react-dialogs
======================

Simple dialog components and mixins for creating quick dialogs. Comes with replacements for `alert()` and `confirm()`.

You have two options for displaying modals

- Component triggers
- Programmatic function calls

### Triggers

```javascript
var Alert = require('react-dialogs/components/Alert')

var Component = react.createClass({

    _handleError: function(){
        this.setState({ hasError: false })
    },

    render: function(){
        return (
            <div>
                <Alert show={this.state.hasError} title='Error!' onAction={this._handleError}>
                    Something went Wrong!
                </Alert>
            </div>
        )
    }    
})
```

Triggers allow you to define your dialogs inline in your render method, this lets you handle dialogs in the same way you would any other Component, and allow you to leverage the uni-directional React data-flow paradigm.

### Function Calls

Sometimes it doesn't make sense to call a dialog in the flow of your component hierarchy. In which case you can use a more traditional appraoch of programatically rendering and destroying the dialog. Dialog function calls return a promise that fulfills when the user makes a choice.

```javascript
var alert = require('react-dialogs/dialogs.alert')

var Component = react.createClass({
    
    showError: function(){
        alert('Something went wrong!', 'Error!').then(function(){
            //do something in response
        })
    },

    render: function(){
        return (
            <button onClick={this.showError}></button>
        )
    }    
})
```

### Custom!

You can easily create more advanced dialogs by creating your own triggers or methods. 
