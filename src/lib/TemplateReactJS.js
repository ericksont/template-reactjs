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