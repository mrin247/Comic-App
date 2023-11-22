import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import GeneratePage from "./pages/generatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="generate" element={<GeneratePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
