import axios from "../api/axios";

const URL = "/Article";

const getArticles = async () => {
  return await axios
    .get(URL + "/GetArticles")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const createArticle = async (articleData) => {
  return await axios
    .post(URL + "/Create", articleData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const readArticle = async (articleId) => {
  return await axios
    .get(URL + "/GetById?id=" + articleId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateArticle = async (articleId, articleData) => {
  return await axios
    .put(URL + "/Update?=" + articleId, articleData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteArticle = async (articleId) => {
  return await axios
    .delete(URL + "/Delete?=id" + articleId + "&userId=4")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const ArticleService = {
  getArticles,
  createArticle,
  readArticle,
  updateArticle,
  deleteArticle,
};

export default ArticleService;
