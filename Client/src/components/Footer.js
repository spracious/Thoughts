import React from 'react';
import logo from "./images/Logo.png";
import { Link } from 'react-router-dom';
import {FaCheck } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";
import {FaWhatsapp } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaSnapchatSquare } from "react-icons/fa";
import {FaPinterest } from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer class="footer-section">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="widget company-intro-widget">
              <a href="index.html" class="widget-title"><img className="ms-5 rounded-5 mb-3" width={20} src={logo} alt="" /> About</a>
              <div class="footer-newsletter">
             <p>THOUGHT was founded by an empathic lady of passionate with a shared love for fashion, lifestyle, and the power of self-expression. Coming from diverse country, she brings a unique perspective to the blog, ensuring a well-rounded and inclusive platform for readers.</p>
              <Link>Read more</Link>
             </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget">
              <h5 class="widget-title">Categories</h5>
              <ul class="courses-link-list">
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>FASHION <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>LIFE-STYLE <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>FOOD <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>TRAVEL <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>SPORT <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>POLITICS <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>ENTERTAIMENT <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>BUSINESS <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>RELATIONSHIP <FaCheck/></a></li>
                <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>VENT-THOUGHT <FaCheck/></a></li>
              </ul>
            </div>
          </div>
          {/* <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget latest-news-widget">
              <h5 class="widget-title">Social Links</h5>
              <ul class="small-post-list">
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 18, 2018</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                  </div>
                </li>
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 28, 2018</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
           <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget">
              <h5 class="widget-title">Social Links</h5>
              <ul class="courses-link-list">
                <li style={{fontSize:"30px"}}><a href="#">< FaYoutube/></a></li>
                <li style={{fontSize:"30px"}}><a href="#"> <FaWhatsapp/></a></li>
                <li style={{fontSize:"30px"}}><a href="#"> <FaTwitter/></a></li>
                <li style={{fontSize:"30px"}}><a href="#"><FaSnapchatSquare/></a></li>
                <li style={{fontSize:"30px"}}><a href="#"> <FaPinterest/></a></li>
                <li style={{fontSize:"30px"}}><a href="#"> <FaLinkedin/></a></li>
                <li style={{fontSize:"30px"}}><a href="#"> <FaFacebook/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget newsletter-widget">
              <h4 class="widget-title">Subscribe to newsletter</h4>
              <div class="footer-newsletter">
                <p>Enter your email address to register to our newsletter subscription!</p>
                <form class="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div class="footer-bottom">
      <div class="container">
        
        <div class="row">
            <div class="col-md-6 col-sm-6 text-sm-left text-center">
              <span class="copy-right-text">© 2023 <a href="">PICDO</a> All Rights Reserved.</span>
            </div>
        
            <div class="col-md-6 col-sm-6">
              <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Privacy Policy</a></li>

                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default Footer