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
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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
    background: '#f0f0f0',
  },
  form: {
    width: '50%',
    backgroundColor: '#ffffff', 
    padding: '200px',
    borderRadius: '100px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};
