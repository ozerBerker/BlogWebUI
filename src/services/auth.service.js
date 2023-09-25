import axios from "../api/axios";

const LOGIN_URL = "/Auth/Login";
const REGISTER_URL = "/Auth/Register";
// const LOGOUT_URL = "Auth/Logout";
const LOGOUT_URL = "";

// const register = (email, userName, firstName, lastName, password) => {
//   return axios.post(REGISTER_URL, {
//     userEmail: email,
//     userName: userName,
//     userFirstName: firstName,
//     userLastName: lastName,
//     userPassword: password,
//   });
// };

const register = (email, userName, firstName, lastName, password) => {
  return axios
    .post(REGISTER_URL, {
      userEmail: email,
      userName: userName,
      userFirstName: firstName,
      userLastName: lastName,
      userPassword: password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const login = (mail, password) => {
  return axios
    .post(LOGIN_URL, {
      userEmail: mail,
      userPassword: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(LOGOUT_URL).then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
