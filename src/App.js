import React from "react";
import Corousel from "./Components/Corousel/Corousel";
import Boxes from "./Components/Boxes/Boxes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContent from "./Components/Boxes/CardContent";

const App = () => {
  return (
    <div className="my-5">
      <BrowserRouter>
        {/* <Corousel />
        <Boxes /> */}
        <Routes>
          <Route path="/" element={<Boxes />} />
          <Route path="/cardcontent/:title" element={<CardContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
