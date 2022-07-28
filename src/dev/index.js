import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import TemplateReactJS from "../lib";
import Caixa from "./pages/caixa/Caixa";
import Faturamento from "./pages/faturamento/Faturmento";

const App = () => {
  return (
    <>
      <TemplateReactJS 
        menu={
          <div>
            <Link to="/caixa"> Caixa Menu </Link><br/>
            <Link to="/faturamento"> Faturamento Menu </Link><br/>
          </div>
        }
      >
        <Route path="faturamento" element={<Faturamento />} />
        <Route path="caixa" element={<Caixa />} />

      </TemplateReactJS>
      
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));