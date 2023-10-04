import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Drawer,
  CssBaseline,
  Divider,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { useParams } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";

import ArticleService from "../../services/article.service";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const { articleId } = useParams(); // Make sure your route configuration includes ":articleId"

  useEffect(() => {
    try {
      ArticleService.readArticle(articleId).then((response) => {
        setArticle(response);
      });
    } catch (error) {
      console.error(error);
    }
  }, [articleId]); // Include articleId in the dependency array to fetch data when it changes

  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          <Article article={article} />
          <SideBar />
        </Grid>
      </Container>
    </div>
  );
}

function Article({ article }) {
  return (
    <Grid item xs={12} md={9}>
      <Grid container spacing={2}>
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
      </Grid>
    </Grid>
  );
}

export default SingleArticle;
