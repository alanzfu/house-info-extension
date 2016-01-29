var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

var actions = require('../actions');
var components = require('../components');
var views = require('../constants').view

var contextType = {
  redux: React.PropTypes.object
}

var App = React.createClass({
  render: function(){
    switch(this.props.view){
      case views.LOGIN:
        return (
          <components.Login {...this.props}/>
        );
      case views.OPTIONS:
        return (
          <components.Options {...this.props}/>
        );
    }
  }
});


function mapStateToProps(state) {
    // instantiate empty object
    // keys currently are: user, view, newRace, activeRace
    var mapping = {};

    for (var k in state){
      mapping[k] = state[k];
    }

  return mapping;
}

function mapDispatchToProps(dispatch) {
  // console.log("THE MAPPED ACTIONS", actions);
  var actionsObj = {}
  for(var key in actions) {
    actionsObj[key] = bindActionCreators(actions[key], dispatch);
  }
  return actionsObj;
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
