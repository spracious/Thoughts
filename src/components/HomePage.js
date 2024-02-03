// import {Link} from 'react';
import BottomNav from "./BottomNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGenderless } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import food from "./images/food.jpg";
import tech from "./images/tech.jpg";
import female from "./images/female.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  // let navigate = useNavigate()
  // let user = localStorage.getItem('is_logged')
  // if(!user){
  //   navigate('/post')
  //   return
  // }

  return (
    <div>
      <BottomNav />
      {/* <div style={{ borderBottom: "1px solid #333"}}></div> */}
      <div style={{ backgroundColor: "#F4F8FD" }}>
        <div className="home">
          <div class="container d-flex justify-content-center pt-5">
            <Card
              style={{
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#FFAB00",
              }}
              className="text-center"
            >
              <Card.Body>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "white",
                  }}
                >
                  Inner Thought exploration
                </h1>
                <Card.Text style={{ color: "white" }}>
                  Welcome to THOUGHT an interactive blog page where we delve
                  into the realms of fashion, lifestyle, food, travels,
                  politics, entertaiment, business and relationship with a touch
                  of formality.
                </Card.Text>
                <Button style={{ backgroundColor: "#FFD43A", border: "none" }}>
                  <Link to="/C-post">Create Thought! </Link>
                  <FaPen />
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div class="container d-flex justify-content-center">
            {/* <div className="mt-3" style={{ borderBottom: "1px solid #333"}}></div> */}
            <Card
              className="mb-5"
              style={{ borderRadius: "10px", border: "none", width: "70%" }}
            >
              <Card.Img className="mt-5" variant="top" src={tech} alt="" />
              <Card.Body>
                <Card.Text>
                  {" "}
                  <div
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 className="me-5">AUGUST 31 2023</h5>
                    <h5 className="me-5">
                      <FaGenderless />
                    </h5>
                    <h5 className="me-5">King James </h5>
                  </div>
                </Card.Text>
                <Card.Title>
                  <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                    Pexels Collections{" "}
                  </h3>
                </Card.Title>

                <Card.Text className="mt-3">
                  No matter what you use Pexels for, creating collections helps
                  you keep the photos you find organized, and it can also be a
                  great way to exercise your creative muscles. We know that
                  sourcing images and videos for blogging and social media
                  posts, as well as for ads of all kinds, is a big part of how
                  freelancers and entrepreneuers make use of Pexels.........
                </Card.Text>
              </Card.Body>
              <Card.Body
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Card.Link style={{ color: "#F9B872" }}>
                <Link to="/post" style={{ color: "#F9B872" }}> Continue Reading <FaLongArrowAltRight /></Link>
                 
                </Card.Link>
                <Link to="/comment" style={{ color: "#F9B872" }}>Comments</Link>
              </Card.Body>
            </Card>
          </div>

          <div class="container d-flex justify-content-center">
            {/* <div className="mt-3" style={{ borderBottom: "1px solid #333"}}></div> */}
            <Card
              className="mb-5"
              style={{ borderRadius: "10px", border: "none", width: "70%" }}
            >
              <Card.Img className="mt-5" variant="top" src={food} alt="" />
              <Card.Body>
                <Card.Text>
                  {" "}
                  <div
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 className="me-5">MARCH 31 2023</h5>
                    <h5 className="me-5">
                      <FaGenderless />
                    </h5>
                    <h5 className="me-5">Kie Kie </h5>
                  </div>
                </Card.Text>
                <Card.Title>
                  <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                    Smokey Party Jollof Rice{" "}
                  </h3>
                </Card.Title>

                <Card.Text className="mt-3">
                  Sisi Jemimah has a new recipe on YouTube. In this video, she’s
                  showing you how to cook smokey jollof rice that’s perfect for
                  parties, and also sharing useful tips. Learn the process
                  below.........
                </Card.Text>
              </Card.Body>
              <Card.Body
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                 <Card.Link style={{ color: "#F9B872" }}>
                <Link to="/post" style={{ color: "#F9B872" }}> Continue Reading <FaLongArrowAltRight /></Link>
                 
                </Card.Link>
                <Link to="/comment" style={{ color: "#F9B872" }}>Comments</Link>
              </Card.Body>
            </Card>
          </div>

          <div class="container d-flex justify-content-center">
            {/* <div className="mt-3" style={{ borderBottom: "1px solid #333"}}></div> */}
            <Card
              className="mb-5"
              style={{ borderRadius: "10px", border: "none", width: "70%" }}
            >
              <Card.Img className="mt-5" variant="top" src={female} alt="" />
              <Card.Body>
                <Card.Text>
                  {" "}
                  <div
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 className="me-5">May 15 2023</h5>
                    <h5 className="me-5">
                      <FaGenderless />
                    </h5>
                    <h5 className="me-5">Tracy Towers </h5>
                  </div>
                </Card.Text>
                <Card.Title>
                  <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                    Pexels Fashion{" "}
                  </h3>
                </Card.Title>

                <Card.Text className="mt-3">
                  To get you thinking about how you can use Pexels fashion, we
                  created a profile for our new fictional friend, fitness coach
                  Emma Clarke. She lives in Austin, Texas, and she uses Pexels
                  to find content for her.........
                </Card.Text>
              </Card.Body>
              <Card.Body
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Card.Link style={{ color: "#F9B872" }}>
                  Continue Reading <FaLongArrowAltRight />
                </Card.Link>
                <Link to="/comment" style={{ color: "#F9B872" }}>Comments</Link>
              </Card.Body>
            </Card>
          </div>

          {/* <div  style={{backgroundColor:"#4D4D4D", color:"white", textAlign:"center"}} >
<Container fluid>
     
        <Col><h2  className="  mt-5">Subscribe to newsletter</h2></Col>
        <Col><h4  className="  mt-5">Enter your email address to register to our newsletter subscription!</h4></Col>
        <Col xs="auto" >
            <Form.Control
              type="text"
              placeholder="Email"
              className=" mr-sm-2 justify-content-center mt-5"
            />
          </Col>
          <Col className="  mb-5" xs="auto">
            <Button style={{backgroundColor:"#FFCE32", border:"none", fontSize:"20px"}}  className="  mt-5" type="submit">Subscribe</Button>
          </Col>
      
    </Container>
</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
