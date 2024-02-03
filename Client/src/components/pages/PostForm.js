import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import BottomNav from "../BottomNav";
import Footer from "../Footer";
import { FaImage } from "react-icons/fa";
import { FaBold} from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnlink } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [text, setText] = useState('');
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [videoURL, setVideoURL] = useState('');

  const handleItalicClick = () => {
    setItalic(!italic);
  };

  const handleBoldClick = () => {
    setBold(!bold);
  };

  const handleUnderlineClick = () => {
    setUnderline(!underline);
  };

  const handleImageChange = (event) => {
    setImageURL(event.target.value);
  };

  const handleVideoChange = (event) => {
    setVideoURL(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");

    console.log({
      text,
      italic,
      bold,
      underline,
      imageURL,
      videoURL,
    });
  };

  const applyFormatting = (formatType) => {
  const selectedText = window.getSelection().toString();
  let updatedContent = content;

  if (selectedText && selectedText.trim() !== "") {
    const formattedText = `<${formatType}>${selectedText}</${formatType}>`;
    updatedContent = updatedContent.replace(selectedText, formattedText);
    setContent(updatedContent);
  }
};

  const textStyles = {
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: bold ? 'bold' : 'normal',
    textDecoration: underline ? 'underline' : 'none',
  };

  return (
    <div>
      <BottomNav />
      <div className="p-card mb-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="postCategory">
            <Form.Label className="p-label">Category</Form.Label>
            <Form.Select style={{fontStyle:"italic", color:"GrayText", fontFamily:"sans-serif",}} className="p-input">
              <option>Select your post category</option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              FASHION
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              LIFE-STYLE
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              FOOD
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              TRAVEL
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              SPORT
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              POLITICS
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
              ENTERTAINMENT
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
                BUSINESS
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
                RELATIONSHIP
              </option>
              <option value={title} onChange={(e) => setTitle(e.target.value)}>
                VENT-THOUGHT
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="postTitle">
            <Form.Label className="p-label">Title</Form.Label>
            <Form.Control
              className="p-input"
              type="text"
              placeholder="Enter the post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="postContent">
            <Form.Label className="p-label">Content</Form.Label>
            <Form.Control
              className="p-input"
              as="textarea"
              rows={4}
              placeholder="Enter the post content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={textStyles}
            />
          </Form.Group>
          <Form.Group>
            <div className="d-flex justify-content-around me-5 mt-5">
              <div className="d-flex me-5 mb-5" style={{fontSize:"20px", color:"black",}}>
                {/* <p className="me-2" onClick={handleUnderlineClick}>
                  <FaUnderline />
                </p>
                <p className="me-2" onClick={handleItalicClick}>
                  <FaItalic />
                </p>
                <p className="me-3" onClick={handleBoldClick}><FaBold/></p> */}
                <p className="me-2 pe-5"><FaImage size={50} color="orange"/></p>
                <p className="me-2 ps-5"><FaVideo size={50} color="orange"/></p>
                {/* <p className="me-2">
                  <FaUnlink />
                </p> */}
              </div>
              <div>
                <Button style={{backgroundColor:"orangered", border:"none",}} type="submit">Create Post</Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default PostForm;
