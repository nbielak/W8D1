import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);

  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <header>
          <h2>{this.props.formType}</h2>
          if (this.props.formType === "login") {
            return (<Link to="/login">Login</Link>);
          } else {
            return (<Link to="/signup">Signup</Link>);
          }
        </header>

        <ul>
          {this.props.errors.session.map( error => (
            return (<li>{error}</li>);
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.update('username')} value={this.state.username}>
          </label>

          <label>Password
            <input type="password" onChange={this.update('password')} value={this.state.password}>
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
