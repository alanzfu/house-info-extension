var React = require('react');

var Login = React.createClass({
  render: function(){
    var login = function(){
      //need to get form data
      this.props.loginActions.login()
    }
    return (
      <div>
        <form>
          <input placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <button onClick={login}>Login/Signup</button>
        </form>
        <a href="http://localhost:8000/auth/facebook">Login With Facebook</a>
      </div>
    )
  }
});

module.exports = Login;
