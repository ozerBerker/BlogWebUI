import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function ArticlePage({ article }) {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {article.articleTitle}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Created on: {new Date(article.articleCreateDate).toDateString()}
      </Typography>
      <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
        {article.articleContent}
      </Paper>
    </Container>
  );
}

export default ArticlePage;
