import React, { useContext, useRef } from 'react'
import styledComponents from 'styled-components';
import { Oathcontext } from '../store/AuthContext';


const Profile = () => {
    const oathContext = useContext(Oathcontext);
    
    
    const inputRef = useRef('');
    const submitHandler=(e)=>{
        e.preventDefault();
        const newPassword=inputRef.current.value;
        const URL='https:identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAsySVKfOiJBUKOhOdwrymEguoXwStpNe0';
        fetch(URL,
            {
                method:'POST',
                body:JSON.stringify({
                    'idToken':oathContext.Token,
                    'password':newPassword,
                    'returnSecureToken':false
                }),
                Headers:{'content-type':'application/json'}
            }).then((res)=>{
                console.log('successfully change the password');
            })

    }

  return (
    <FORM onSubmit={submitHandler}>
        <p>
            <label>New password</label><br/>
            <input type="password" id="password" ref={inputRef}/>
        </p>

        <p>
            <button type='submit'>change the password</button>
        </p>
    </FORM>
    )
}


const FORM=styledComponents.form`
margin: auto;
width: 30%;
background-color: darkgray;
margin: 100px auto;
padding: 20px;
label{
    font-weight: bolder;
    color: #0a0e3e;
    }
    input{
                 width: 100%;
                 padding: 9px;
                 outline: none;
             }
             button{
                 font-weight: 100;
                 width: 100%;
                 padding: 5px;
                 margin-bottom: 5px;
                 cursor: pointer;
                 margin-top: 10px;
             }
`;

export default Profile