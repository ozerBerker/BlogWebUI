import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  Grid,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import ArticleService from "../../services/article.service";
import axios from "axios";
import { Profile } from "../../pages";

export default function GetArticles() {
  return (
    <Profile>
      <Content />
    </Profile>
  );
}

function Content() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    try {
      ArticleService.getArticles().then((response) => {
        // Filter articles where articleIsActive is true
        response = response.filter(
          (article) => article.articleIsActive === true
        );
        setArticles(response);
      });
    } catch (error) {
      console.error(error);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleDeleteArticle = async (articleId) => {
    try {
      // Call the deleteArticle function and pass the articleId to delete
      await ArticleService.deleteArticle(articleId);

      // Remove the deleted article from the local state
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h6">User Articles</Typography>
      <TableContainer component={Paper}>
        <Button variant="contained" href="/profile/create-article">
          Add Article
        </Button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Categories</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((article) => (
              <TableRow
                key={article.articleId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {article.articleId}
                </TableCell>
                <TableCell align="right">{article.articleTitle}</TableCell>
                <TableCell align="right">
                  {article.articleIsActive ? "True" : "False"}
                </TableCell>
                <TableCell align="right">{article.categoryId}</TableCell>
                <TableCell align="right">{article.userId}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() =>
                      navigate("/read-article/" + article.articleId)
                    }
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteArticle(article.articleId)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
