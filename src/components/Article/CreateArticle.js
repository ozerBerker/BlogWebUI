import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

import ArticleService from "../../services/article.service";
import { Profile } from "../../pages";

function CreateArticle() {
  return (
    <Profile>
      <Content />
    </Profile>
  );
}

function Content() {
  const [articleData, setArticleData] = useState({
    articleTitle: "",
    articleContent: "",
    articleImage: "https://source.unsplash.com/random?wallpapers",
    articleIsActive: true,
    categoryId: 1,
    userId: 4,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // Create the article using ArticleService
      ArticleService.createArticle(articleData)
        .then((response) => {
          console.log("Article created:", response);
          // Redirect to the article's page or perform other actions as needed
          navigate("/profile/article");
        })
        .catch((error) => {
          console.error("Error creating article:", error);
          // Handle errors here, e.g., show an error message to the user
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h6">Add Articles</Typography>
      <Paper>
        <Typography variant="h6">Create New Article</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="articleTitle"
            label="Title"
            fullWidth
            margin="normal"
            value={articleData.articleTitle}
            onChange={handleChange}
            required
          />
          <TextField
            name="articleContent"
            label="Content"
            fullWidth
            multiline
            rows={6}
            margin="normal"
            value={articleData.articleContent}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Create Article
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default CreateArticle;
