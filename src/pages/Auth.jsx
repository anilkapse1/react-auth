import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext, { Oathcontext } from "../store/AuthContext";
import './Auth.scss';


const Auth = () => {

  //navigate
  const navigate=useNavigate();

  //context
  const oathContext = useContext(Oathcontext);

  const [loginToggle, setLogin] = useState(true);

  const toggleHandler = () => {
    setLogin((preVal) => !preVal);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const emailPassword = document.getElementById('password').value;

    console.log(emailInput);
    console.log(emailPassword);
    
    if(loginToggle){
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsySVKfOiJBUKOhOdwrymEguoXwStpNe0',
        {
            method:'POST',
            body:JSON.stringify({
                'email':emailInput,
                'password':emailPassword,
                'returnSecureToken':true

            }),
            headers:{'content-type':'application/json'}
    
        }).then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                return res.json().then(data=>{
                    let message="Authenticaion failed";
                    if(data){
                        message=data.error.message;
                    }
                    alert(message);
                })
            }

        }).then((data)=>{
          alert('login successfull');
          console.log('successfull response',data)
          oathContext.Login(data.idToken);
          navigate('/profile');
        }).catch((error)=>{alert(error)})

    }else{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsySVKfOiJBUKOhOdwrymEguoXwStpNe0',
        {
            method:'POST',
            body:JSON.stringify({
                'email':emailInput,
                'password':emailPassword,
                'returnSecureToken':true

            }),
            headers:{'content-type':'application/json'}
    
        }).then((res)=>{
            if(res.ok){
                alert('account created successfully');    
            }else{
                return res.json().then(data=>{
                    let message="Authenticaion failed";
                    if(data){
                        message=data.error.message;
                    }
                    alert(message);
                })
            }
            console.log(res.json())
        })
    }
  }
  return (
    <div className="login_form">
       <h1>{loginToggle?'login':'sign up'}</h1> 
      <form onSubmit={submitHandler}>
        <div className="input_group">
          <label>Email</label><br/>
          <input type="email" id="email" required />
        </div>
        <div className="input_group">
          <label>password</label><br/>
          <input type="password" id="password" required />
        </div>
        <div className="actions">
          <p>
            <button type="submit">
              {loginToggle ? "login" : "create an account"}
            </button>
          </p>
          <p>
            <button type="button" onClick={toggleHandler}>
              {!loginToggle ? "login" : "create an account"}
            </button>
          </p>

         
        </div>
      </form>
    </div>
  );
};

export default Auth;
