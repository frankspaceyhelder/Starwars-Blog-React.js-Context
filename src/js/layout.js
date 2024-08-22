import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ViewCharacterDetails } from "./views/ViewCharacterDetails";
import { ViewStarshipDetails } from "./views/ViewStarshipDetails";
import { ViewPlanetDetails } from "./views/ViewPlanetDetails";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<ViewCharacterDetails />} />
            <Route path="/starships/:id" element={<ViewStarshipDetails />} />
            <Route path="/planets/:id" element={<ViewPlanetDetails />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
