import React from "react";
import Header from "./Components/Header";
import Category from "./Components/Category";
import { Toprest } from "./Components/Toprest";
import Onlineorder from "./Components/Onlineorder";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Category />
      <Toprest />
      <Onlineorder />
      <Footer />
    </>
  );
};

export default App;
