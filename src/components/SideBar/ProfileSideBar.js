import React from "react";
import {
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from React Router

function ProfileSideBar() {
  return (
    <Grid item xs={12} md={3}>
      <Paper>
        <Typography variant="h6">Profile Tabs</Typography>
        <List>
          <ListItem button component={Link} to="/profile">
            <ListItemText primary="Information" />
          </ListItem>
          <ListItem button component={Link} to="/profile/article">
            <ListItemText primary="Articles" />
          </ListItem>
          {/* Add more tabs as needed */}
        </List>
      </Paper>
    </Grid>
  );
}

export default ProfileSideBar;
