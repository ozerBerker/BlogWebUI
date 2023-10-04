import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to true if the user is logged in
  const [userInfo, setUserInfo] = useState(null); // User information from local storage

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = AuthService.getCurrentUser();
    if (storedUserInfo && storedUserInfo.jwtToken) {
      setUserInfo(storedUserInfo);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login/logout
  const handleLogin = () => {
    if (isLoggedIn) {
      // Logout logic
      navigate("/");
      AuthService.logout();
      setUserInfo(null);
      setIsLoggedIn(false);
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="/">
          <Typography variant="h6">Blog Post</Typography>
        </Button>
        <div style={{ flex: 1 }} />
        <div>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
          {isLoggedIn ? (
            <Button color="inherit" href="/profile">
              Profile
            </Button>
          ) : null}
          <Button color="inherit" onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
