import React from "react";
import { Container, Typography } from "@mui/material";

function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f8f8f8", // Change the background color as needed
    padding: "10px 0", // Adjust padding as needed
    borderTop: "1px solid #ddd", // Add a top border for separation
    margin: "20rem 20rem 0rem 0rem", // Add a top margin of 2rem
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Your Blog Name
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
