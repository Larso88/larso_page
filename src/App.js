import React from "react";
import TopNavigation from "./components/TopNavigationComponent";

import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import FavoriteMovies from "./pages/FavoriteMovies";


const App = () => {
  return (   <div className={"min-h-screen mx-10 flex flex-col"}>
        <TopNavigation />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/favorite-movies"} element={<FavoriteMovies />} />


        </Routes>
      </div>
  );
}



export default App;
