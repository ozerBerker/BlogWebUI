import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, Profile, SingleArticle } from "./pages";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import GetArticles from "./components/Article/GetArticles";
import CreateArticle from "./components/Article/CreateArticle";
import UpdateArticle from "./components/Article/UpdateArticle";

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/profile">
            <Route index element={<Profile />} />
            <Route path="article" element={<GetArticles />} />
            <Route path="create-article" element={<CreateArticle />} />
            <Route
              path="update-article/:articleId"
              element={<UpdateArticle />}
            />
          </Route>
          <Route path="/profile/" element={<Profile />} />
          <Route path="/read-article/:articleId" element={<SingleArticle />} />
        </Routes>
        <Footer />
      </main>
    );
  }
}
export default App;
