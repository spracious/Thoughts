import React, { useState } from 'react';import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/Logo.png";
import { FaRegUser } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";


function BottomNav() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
       <Navbar expand="lg" className="mt-5">
      <Container className="justify-content-center mb-5" style={{fontSize:"12px", fontWeight:"bold"}}>
        {/* <Navbar.Brand href="#home"><img width={25} src={logo} alt="" /></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mt-5">
          <Nav.Link className="me-2" href="#home"><img width={25} src={logo} alt="" /></Nav.Link>
            <Nav.Link href="#home">FASHION</Nav.Link>
            <Nav.Link href="#link">LIFE-STYLE</Nav.Link>
            <Nav.Link href="#link">FOOD</Nav.Link>
            <Nav.Link href="#link">TRAVEL</Nav.Link>
            <Nav.Link href="#link">SPORT</Nav.Link>
            <Nav.Link href="#link">POLITICS</Nav.Link>
            <Nav.Link href="#link">ENTERTAINMENT</Nav.Link>
            <Nav.Link href="#link">BUSINESS</Nav.Link>
            <Nav.Link href="#link">RELATIONSHIP</Nav.Link>
            <Nav.Link href="#link">VENT-THOUGHT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className=" justify-content-end">
          <Navbar.Text className="mt-5">
          {isLoggedIn ? (
           <div style={{display:"flex"}}>
           <FaRegUser className="me-2 mt-3"/>
           <a style={{ color: "#FFCE32" }} className='mt-3 ps-3' href="#login">John Doe</a>
            <NavDropdown className="me-2 mt-2" title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Posts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Likes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Following
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Followers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
           </div>
            ) : (
              <Link to="/login" style={{ color: "#FFCE32" }} className='mt-3' > <FaUserLock  className="me-3"/> Sign Up </Link>
            )}

{/* <Link to="/register" style={{color:"#FFCE32"}} className="" >Sign Up <FaUserLock/> </Link> */}

          </Navbar.Text>

          {/* <Navbar.Text className="mt-5">
            <FaRegSun className="me-3"/>
             <a href="#login">Settings</a>
          </Navbar.Text> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BottomNav;




  // <Container>
  //     <Navbar expand="lg">
  //       <Container className="justify-content-center mb-5">
  //         <Navbar.Brand href="#">
  //        <Link to="/home" className="ms-5">
  //        <img className="ms-5" width={50} src={logo} alt="" />
  //         <img  width={200} src={gif} alt="" />
  //        </Link>
        
  //        <div className="mt-3">
  //        <i className="" style={{fontFamily:"italic", fontWeight:"bold", color:"#F9B872"}}>EXPRESS THOSE INNER THOUGHTS 💭  
  //        </i>
  //        <Link to="/register" style={{color:"#FFCE32"}} className="ms-3" >Sign Up <FaUserLock/> </Link>
  //        </div>
  //         </Navbar.Brand>
  //       </Container>
  //     </Navbar>
      
  //   </Container> 