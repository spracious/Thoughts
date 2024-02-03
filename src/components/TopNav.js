import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import gif from "./images/Thoughts-8-30-2023.gif";
import logo from "./images/Logo.png";
import Button from 'react-bootstrap/Button';
import { FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";


function TopNav() {

  return (
    <div>
      <Container>
      <Navbar expand="lg">
        <Container className="justify-content-center mb-5">
          <Navbar.Brand href="#">
         <Link to="/" className="ms-5">
         <img className="ms-5" width={50} src={logo} alt="" />
          <img  width={200} src={gif} alt="" />
         </Link>
        
         <div className="mt-3">
         <i className="me-5 fs-5" style={{fontFamily:"italic", fontWeight:"bold", color:"#F9B872"}}>EXPRESS THOSE INNER THOUGHTS 💭</i>
         
         </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </Container>
    </div>
  );
}

export default TopNav;