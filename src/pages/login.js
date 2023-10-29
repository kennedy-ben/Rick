import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      
    };

    const formStyle = {
        width: '50%',
      padding: '20opx',
      border: '1px solid #ccc',
      borderRadius: '100px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    return (
      <div style={containerStyle}>
        <form style={formStyle}>
          <h3 style={{ textAlign: 'center' }}>Log In</h3>

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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
