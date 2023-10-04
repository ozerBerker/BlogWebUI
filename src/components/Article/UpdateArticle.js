import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

import ArticleService from "../../services/article.service";

function UpdateArticle({ articleId }) {
  const [articleData, setArticleData] = useState({
    articleTitle: "",
    articleContent: "",
    articleImage: "",
    articleIsActive: false,
    categoryId: "",
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await ArticleService.readArticle(articleId);
        console.log(response);
        setArticleData(response || {}); // Ensure that response is an object, or use an empty object if it's undefined
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [articleId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Update the article using ArticleService
      const response = await ArticleService.updateArticle(
        articleId,
        articleData
      );
      console.log("Article updated:", response);
      // Redirect to the article's page or perform other actions as needed
    } catch (error) {
      console.error("Error updating article:", error);
      // Handle errors here, e.g., show an error message to the user
    }
  };

  return (
    <Container>
      <Paper>
        <Typography variant="h6">Update Article</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="articleTitle"
            label="Title"
            fullWidth
            margin="normal"
            value={articleData.articleTitle} // Add a conditional check for articleTitle
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
            value={articleData.articleContent || ""} // Add a conditional check for articleContent
            onChange={handleChange}
            required
          />
          {/* Add input fields for other article properties here */}
          <Button type="submit" variant="contained" color="primary">
            Update Article
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default UpdateArticle;
