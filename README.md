react-dialogs
======================

Dirt simple components and mixins for creating flexible dialogs. Comes with async replacements for `alert()` and 
`confirm()`.

You have two options for displaying modals

- Component triggers (the React way™)
- Programmatic function calls

### Triggers

```javascript
var Alert = require('react-dialogs/lib/components/Alert')

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

Triggers allow you to define your dialogs inline in your render method, this lets you handle dialogs in the same way you would any other Component, and allow you to leverage the uni-directional React data-flow paradigm. A trgiger is a component that controlls the showing/hiding of a model. Just provide the `show=true` prop to render the model, and you can hide it again in resposne to an action via the `onAction` handler prop

### Function Calls

Sometimes it doesn't make sense to call a dialog in the flow of your component hierarchy. In which case you can use a more traditional approach of programatically rendering and destroying the dialog. Dialog function calls return a promise that fulfills when the user makes a choice.

```javascript
var alert = require('react-dialogs/lib/dialogs/alert')

var Component = react.createClass({
    
    showError: function(){
        //will render an Alert modal
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

__Create a Component dialog__

```javascript
var alert = require('react-dialog/lib/components/Dialog')

var AwesomeDialog = react.createClass({
    
    getDefaultProps(){
        return {
            awesomeLevel: 1,
            show: false
        }
    },

    render(){
        var { 
          , children
          , awesomeLevel
          , ...options } = this.props
          , over9000 = awesomeLevel > 9000;

        options.title = over9000 ? '!!!!!!' : 'you are awesome';
        options.content = 
        options.actions = [
          ['done', 'OK done here']
        ]

        return (
          <Dialog {...options}>
            <h3>{over9000 ? "IT'S OVER 9000!" : (children + ' awesome')}</h3>
          </Dialog>
        )
    }    
})

React.render(<AwesomeDialog awesomeLevel={9300}>Jason</AwesomeDialog>
    , document.body)
```

__Create a programmatic dialog__

you can 'extend' the functional approach by just wrapping the `dialog()` method and preconfiguring some options.

```javascript
var alert = require('react-dialog/lib/dialogs/dialog')

module.exports = function SuperAwesomeDialog(awesomeLevel){
    var options = {}
      , over9000 = awesomeLevel > 9000;

    options.title = over9000 ? '!!!!!!' : 'you are awesome';
    options.content = <h3>{over9000 ? "IT'S OVER 9000!" : (name + ' awesome')}</h3>
    options.actions = [
      ['done', 'OK done here']
    ]

    return dialog(options).then( action => action === 'done' ) //resolves true now for clicking the button
}
```


## Styles
The base Modal component is from [react-bootstrap-modal](https://github.com/jquense/react-bootstrap-modal) which provides Componentized hooks for creating twitter bootstrap modals in React (with a few enhancements)

The default bootstrap modal styles work here and can be included independantly by using the `/lib/bbm-complete.css` file. If you want to style the modals yourself (or already have a bootstrap.css file included), just include the `/lib/bbm-patch file.css`. In addition the `Alert` and `Confirm` dialogs apply `btn btn-primary` and  `btn btn-link` styles to their buttons. You can override these styles by providing ReactElements instead of strings to the respective components. You can also use the bootstrap styles independent of bootstrap by including the `lib/bootstrap-buttons.css` file which contains just enoguh of the original Bootstrap styles to get it all working.
