import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import guest from "../images/house guest.webp";
import BottomNav from '../BottomNav'
import { Link } from "react-router-dom";
import {FaYoutube } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaRegEnvelope} from "react-icons/fa";
import {FaLongArrowAltLeft} from "react-icons/fa";
import {FaLongArrowAltRight} from "react-icons/fa";


function PostPage() {
  return (
   <div>
    <BottomNav/>
    <div style={{ borderBottom: "1px solid #333", width:"97%", margin:"auto" }}></div>
    <div className="d-flex justify-content-between m-5">
        
            <p>September 14, 2023</p>
            <p>RelationShip</p>
            <p>By <i style={{color:"#F9B872"}}>Toni Baxton</i></p>
        </div>
     <div className="container d-flex justify-content-center"> 
     
         <Card className="text-center" style={{borderRadius:"10px", border:"none", width:"90%"}}>
         
      <Card.Title style={{fontSize:"30px"}}>Are You a Party Host or Enthusiastic Guest?</Card.Title>
      <Card.Img className="mt-5" variant="top" src={guest} alt="" />
    </Card>
    </div>

    <div >
    <Card.Body className="d-flex justify-content-between m-5">
  <div className='me-2'>
  <div style={{ borderBottom: "1px solid #FFAB00", margin:"auto" }}></div>
    <h3 style={{color:"#F9B872"}}><Link to="/comment">120 COMMENTS</Link></h3>
    <Button style={{ backgroundColor: "#FFD43A", border: "none" }}>
                  <Link to="/comment" style={{color:"white"}}>DROP A COMMENT </Link>
                  
                </Button>
  </div>

        <Card.Text style={{width:"40%", fontSize:"20px"}}>
        “We host friends regularly,” commented JW on this post about party food. “But we almost never get invited by anyone else. My family enjoys hosting and we have a house that’s set up for it, but it can feel lonely always initiating and hosting events on our own. I feel like our friends would just go on with their lives without us if we didn’t invite them over, and that makes me sad. Anyone else experiencing this?”

A Greek chorus of readers agreed. (“Yes, 100% yes.” “Can relate! It stings.” “My husband and I feel the same way.” “So many discussions on this exact issue with my therapist.” )

But the final comment of the thread really struck me:

“I think some people are Party Hosts, and other people are Enthusiastic Guests,” wrote Kara. “If you’re the Party Host in your friend group, I don’t think you should take it personally if no one else is. Not everyone has the kind of relationship to their home where they feel comfortable hosting, and not everyone finds that kind of work fun. Reciprocity often looks like returning the same amount of energy in a way that fits the person. I’d look for returned energy in other forms. If you still feel like you put in all the effort, maybe it’s time to gently share that with your closest friends, and let the not-so-close friends drift loose.”

YES! YES! YES! In my group of friends, there are a few Party Hosts (myself included because I enjoy it). Then the Enthusiastic Guests show up with gossip and jokes and Prosecco and Chipwiches. And that’s where the magic happens.

“My favorite guests are the people who are excited,” Catherine Newman said in her legendary home tour. “I love when I say, ‘Would you like wine or beer at dinner?’ and they’re like, ‘Ooh, can we have both?!’ I appreciate people who are into being hosted and enjoy all the special stuff. ‘Do you guys eat ice cream?’ ‘WE LOVE ICE CREAM!!!!!!’”
        </Card.Text>
      <div>
      <div style={{ borderBottom: "1px solid #FFAB00", margin:"auto" }}></div>
      <p className="mt-3">VENT-THOUGHT</p>
        <h3 style={{color:"#F9B872"}} className="">Most Popular</h3>
      </div>
      </Card.Body>
      
    </div>

    <div style={{ borderBottom: "1px solid #333", width:"97%", margin:"auto" }}></div> 

    <div className="d-flex justify-content-between m-5" style={{fontSize:"18px"}}>

     <p style={{color:"#F9B872"}}> <FaLongArrowAltLeft/> PREVIOUS ARTICLE</p>

     {/* <Link to="/comment" style={{color:"#FFCE32"}}>120 COMMENT</Link> */}

     <p className="d-flex justify-content-around me-5" style={{color:"orangered"}}>
        <span className="ms-3"><FaFacebook/></span>
        <span className="ms-3"><FaInstagram/></span>
        <span className="ms-3"><FaTwitter/></span>
        <span className="ms-3">< FaYoutube/></span>
        <span className="ms-3"><FaRegEnvelope/></span>
     </p>

     <p style={{color:"#F9B872"}}>NEXT ARTICLE <FaLongArrowAltRight/></p>

    </div>

   </div>
  )
}

export default PostPage