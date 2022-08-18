import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useSearchParams,
  } from "react-router-dom";
import Internal from "./pages/internal/Internal";
import Login from "./pages/login/login";

document.body.style.width = '100%';
document.body.style.minHeight = '100vh';
document.body.style.backgroundColor = '#f3f3f3';
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.color = "#73879C";

const TemplateReactJS = ({...props}) => (
    
    <BrowserRouter>
    
    <Link to="/login"> Login </Link><br/>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Internal menu={props.menu} />}>
                {props.children}
            </Route>
        </Routes>
    </BrowserRouter>
);

export default TemplateReactJS;