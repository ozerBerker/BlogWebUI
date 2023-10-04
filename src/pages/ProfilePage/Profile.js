import React, { useState, useEffect } from "react";

import { Container, CssBaseline, Grid, Paper, Typography } from "@mui/material";

import AuthService from "../../services/auth.service";
import ProfileSideBar from "../../components/SideBar/ProfileSideBar";

function Profile({ children }) {
  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          {/* Left Tab Section */}
          <ProfileSideBar />
          {/* Right Content Section */}
          <Content children={children} />
        </Grid>
      </Container>
    </div>
  );
}

function Content({ children }) {
  const [userInfo, setUserInfo] = useState([]); // User information from local storage

  useEffect(() => {
    const storedUserInfo = AuthService.getCurrentUser(); // Fetch user info from AuthService
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);
  return (
    <Grid item xs={12} md={9}>
      <Paper>
        {children ? (
          children
        ) : (
          <div>
            <Typography variant="h6">User Information</Typography>
            <Typography>Id: {userInfo.Id}</Typography>
            <Typography>Name: {userInfo.Name}</Typography>
            <Typography>Email: {userInfo.Email}</Typography>
            <Typography>Roles: {userInfo.Role}</Typography>
            {/* Display more user information here */}
          </div>
        )}
      </Paper>
    </Grid>
  );
}

export default Profile;
