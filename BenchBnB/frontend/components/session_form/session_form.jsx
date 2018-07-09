import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render () {
    if (this.props.formType === 'login') {
      return (
        <div>
          <h3>Log In</h3>
          <Link to="api/login"></Link>
          {this.props.errors}
        </div>
      );
    } else {
      return (
        <div>
          <h3>Sign Up</h3>
          <Link to="api/signup"></Link>
          {this.props.errors}
        </div>
      );
    }
  }

}
