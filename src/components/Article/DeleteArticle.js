import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

import ArticleService from "../../services/article.service";
import { Profile } from "../../pages";

function deleteArticle({ articleId }) {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .delete("https://localhost:7153/Article/Delete?id=16&userId=4")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts
}

export default deleteArticle;
