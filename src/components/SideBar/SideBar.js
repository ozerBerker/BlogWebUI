import React from "react";
import {
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function SideBar() {
  return (
    <Grid item xs={12} md={3}>
      <Paper>
        <Typography variant="h6">Sidebar</Typography>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Link 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Link 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Link 3" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Link 4" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Link 5" />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
}

export default SideBar;
