import axios from "../api/axios";

const LOGIN_URL = "/Auth/Login";
const REGISTER_URL = "/Auth/Register";
const LOGOUT_URL = "";

const register = async (email, userName, firstName, lastName, password) => {
  try {
    const response = await axios.post(REGISTER_URL, {
      userEmail: email,
      userName: userName,
      userFirstName: firstName,
      userLastName: lastName,
      userPassword: password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const login = async (mail, password) => {
  try {
    const response = await axios.post(LOGIN_URL, {
      userEmail: mail,
      userPassword: password,
    });
    if (response.data.token) {
      localStorage.setItem("jwtToken", response.data.token);
      localStorage.setItem("Id", response.data.userId);
      localStorage.setItem("Name", response.data.userName);
      localStorage.setItem("Email", response.data.userEmail);
      localStorage.setItem("Role", response.data.userRole);
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const logout = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("Id");
  localStorage.removeItem("Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("Role");
  // You can make this an async function as well if needed
  // return axios.post(LOGOUT_URL).then((response) => {
  //   return response.data;
  // });
};

const getCurrentUser = () => {
  return {
    jwtToken: localStorage.getItem("jwtToken"),
    Id: localStorage.getItem("Id"),
    Name: localStorage.getItem("Name"),
    Email: localStorage.getItem("Email"),
    Role: localStorage.getItem("Role"),
  };
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
