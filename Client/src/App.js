import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import HomePage from "./components/HomePage";
import PostPage from "./components/pages/PostPage";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import PostForm from "./components/pages/PostForm";
import CommentModal from "./components/pages/CommentModal";
import UserProfile from "./components/pages/UserProfile";
import EditUser from "./components/pages/EditUser";
import CustomForm from "./components/pages/CustomForm"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />

        <Routes>
          <Route path="/nav" element={<BottomNav />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<CustomForm/>} />
          <Route path="/C-post" element={<PostForm />} />
          <Route path="/comment" element= {<CommentModal/>} />
          <Route path="/profile" element= {<UserProfile/>} />
          <Route path="/edit" element= {<EditUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
