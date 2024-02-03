import React, { Component } from 'react'
import Footer from '../Footer'
export default class Login extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop:"70px",}}>
        <form className="register">
        <h3 className="mb-5 ms-3">Sign In</h3>
        <div className="mb-3 ms-3 me-5">
          <label >Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3 ms-3 me-5">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3 ms-3 me-5">
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
          <button type="submit" className="btn ms-3 me-5 mb-3 mt-3" style={{backgroundColor:"#FFAB00", color:"white",}}>
            Login
          </button>
        </div>
        <p className="forgot-password text-right me-3 mt-3 mb-5">
          Forgot <a href="#">password?</a>
        </p>
      </form>
        </div>
        <Footer/>
      </div>
    )
  }
}





