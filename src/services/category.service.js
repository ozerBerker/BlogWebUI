import axios from "../api/axios";

const GET_CATEGORIES_URL = "/Category/GetCategories";
const CREATE_CATEGORY_URL = "/Category/CreateCategory";
const READ_CATEGORY_URL = "/Category/GetCategory";
const UPDATE_CATEGORY_URL = "/Category/UpdateCategory";
const DELETE_CATEGORY_URL = "/Category/DeleteCategory";

const getCategories = () => {
  return axios
    .get(GET_CATEGORIES_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const createCategory = (categoryData) => {
  return axios
    .post(CREATE_CATEGORY_URL, categoryData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const readCategory = (categoryId) => {
  const url = `${READ_CATEGORY_URL}/${categoryId}`;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateCategory = (categoryId, categoryData) => {
  const url = `${UPDATE_CATEGORY_URL}/${categoryId}`;
  return axios
    .put(url, categoryData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteCategory = (categoryId) => {
  const url = `${DELETE_CATEGORY_URL}/${categoryId}`;
  return axios
    .delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const CategoryService = {
  getCategories,
  createCategory,
  readCategory,
  updateCategory,
  deleteCategory,
};

export default CategoryService;
