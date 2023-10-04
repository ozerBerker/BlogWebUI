import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

import EditIcon from "@mui/icons-material/Edit";

import SideBar from "../../components/SideBar/SideBar";

import ArticleService from "../../services/article.service";
import CategoryService from "../../services/category.service";

function Home() {
  return (
    <div>
      <CssBaseline />
      <Container>
        <Categories />
        <Grid container spacing={2}>
          <Content />
          <SideBar />
        </Grid>
      </Container>
    </div>
  );
}

function Content() {
  const [articles, setArticles] = useState([]);
  const localUserId = localStorage.getItem("Id");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const response = ArticleService.getArticles().then((response) => {
        console.log(response);
        setArticles(response);
      });
    } catch (error) {
      console.error(error);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <Grid item xs={12} md={9}>
      <Grid container spacing={2}>
        {/* ArticleCard components go here */}
        {/* Example: */}
        {articles.map((article) => (
          <Grid item xs={12} sm={6} key={article.articleId}>
            <Paper style={{ position: "relative" }}>
              {article.userId == localUserId && (
                <IconButton
                  style={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    zIndex: 1,
                  }}
                  color="primary"
                  aria-label="Edit"
                  onClick={() =>
                    navigate("/profile/update-article/" + article.articleId)
                  }
                >
                  <EditIcon />
                </IconButton>
              )}
              <img
                src="https://source.unsplash.com/random?wallpapers"
                alt="Article"
                style={{ width: "100%" }}
              />
              <Typography variant="subtitle1">
                {article.articleTitle}
              </Typography>
              <Typography variant="caption">
                {article.articleCreateDate}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      const response = CategoryService.getCategories().then((response) => {
        setCategories(response);
      });
    } catch (error) {
      console.error(error);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {categories.map((category) => (
            <Tab label={category.categoryName} key={category.categoryId} />
          ))}
        </Tabs>
      </Grid>
    </Grid>
  );
}

export default Home;
