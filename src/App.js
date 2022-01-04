import React, { useContext } from 'react';
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Home from './pages/home/Home'
import Single from './single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { Context } from './context/Context';

function App() {
  const user = useContext(Context);
  console.log('user: ', user)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user.user ? <Home /> : <Register />} />
        <Route path="/login" element={user.user ? <Home /> : <Login />} />
        <Route path="/write" element={user.user ? <Write /> : <Register />} />
        <Route path="/settings" element={user.user ? <Settings /> : <Register />} />
        <Route path="/posts/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
