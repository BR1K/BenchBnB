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

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(success => this.setState({username: "", password: ""}));
  }

  render () {
    let linkUrl, title;

    if (this.props.formType === 'login') {
      linkUrl = '/login';
      title = 'Log In';
    } else {
      linkUrl = '/signup';
      title = 'Sign Up';
    }

    const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>);

    return(
      <div>
        <h2>{title}</h2>
        <Link to={linkUrl}></Link>

        <ul>{errors}</ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username
            <input value={this.state.username} onChange={this.handleChange('username')}></input>
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.handleChange('password')}></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}


export default SessionForm;
