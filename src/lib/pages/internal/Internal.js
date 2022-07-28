import React from "react";
import { Link, Outlet } from "react-router-dom";

const Internal = ({...props}) => (
  <>
    {console.log(props.menu)}
    Internal <br/>
    {props.menu}
    <Outlet />
  </>
);

export default Internal;