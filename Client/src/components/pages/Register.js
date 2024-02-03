import React, { Component } from 'react'
import BottomNav from '../BottomNav'
import { Link } from "react-router-dom";
import Footer from '../Footer';

export default class Register extends Component {
  render() {
    return (
      <div>
        {/* <BottomNav/> */}
        <div style={{marginTop:"70px",}}>
        <form className="register">
        <h3 className="mb-5 ms-3"> Sign Up</h3>
        <div className="mb-3 ms-3 me-5">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3 ms-3 me-5">
          <label>User Name</label>
          <input type="text" className="form-control" placeholder="User Name" />
        </div>
        <div className="mb-3 ms-3 me-5">
          <label>Email address</label>
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
        <div className="d-grid">
          <button type="submit" className="btn ms-3 me-5 mb-3 mt-3" style={{backgroundColor:"#FFAB00", color:"white",}}>
            Sign Up!
          </button>
        </div>
        <p className="forgot-password text-right me-3 mt-3 mb-5">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
        </div>
        <Footer/>
      </div>
    )
  }
}

