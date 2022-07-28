import React from "react";

const Login = () => (
  <>
    <div class="root">

<a class="hiddenanchor" id="signup"></a>
<a class="hiddenanchor" id="signin"></a>
<a class="hiddenanchor" id="request-pass"></a>

<div class="banners" ></div>
<div class="content">

    <section class="animate container login-form">
        <h1>Login Form</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div>
                <a class="btn btn-default submit" href="index.html">Log in</a>
                <a class="reset_pass" href="#">Lost your password?</a>
            </div>
        </form>
        
        <a href="#signup"> Create Account </a>
        <a href="#request-pass"> Request Pass </a>
    </section>
    
    <section class="animate container registration-form">
        <h1>Create Account</h1>
        <a href="#signin"> Log in </a>
    </section>

    <section class="animate container request-pass">
        <h1>Request Pass</h1>
        <a href="#signin"> Log in </a>
    </section>
    
</div>
</div>
  </>
);

export default Login;