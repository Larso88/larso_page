import React from "react";
import TopNavigation from "./components/TopNavigationComponent";

import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import FavoriteMovies from "./pages/FavoriteMovies";
import CV from "./pages/CV";
import Info from "./pages/Info";


const App = () => {
  return (   <div className={"min-h-screen flex flex-col bg-gradient-to-r from-stone-900 to-stone-700 text-stone-300"}>
        <TopNavigation />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/favorite-movies"} element={<FavoriteMovies />} />
            <Route path={"/cv"} element={<CV />} />
            <Route path={"/info"} element={<Info />} />
        </Routes>
      </div>
  );
}



export default App;
