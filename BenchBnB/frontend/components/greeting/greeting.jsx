import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  render() {

    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome, {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      );
    }
  }

}

export default Greeting;
