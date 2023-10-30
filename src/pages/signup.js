import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <div style={styles.container}>
        <form style={styles.form}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              style={styles.input}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              style={styles.input}
            />
          </div>
   

          <div className="mb-3">
            <label>Email adress</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              style={styles.input}
            />
          </div>

          <div className="mb-3">
            <label> Password  </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              style={styles.input}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">log in?</a>
          </p>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    background: '#f9f9f9',
  },
  form: {
    width: '50%',
    backgroundColor: '#AAA',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
  },
};
