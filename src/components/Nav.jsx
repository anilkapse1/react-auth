import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Oathcontext } from '../store/AuthContext'
import './Nav.scss'
import { useNavigate } from "react-router";

const Nav = () => {
 //context
 const oathContext = useContext(Oathcontext);

  //navigate
const navigate = useNavigate();

   const oathcontext = useContext(Oathcontext);
   const logoutHandler=()=>{
       console.log('successfuly logout');
       oathcontext.Logout();
       navigate('/auth');
   }
  return (
    <nav>
        <ul>
            <li><Link to='/auth'>Login</Link></li>
            {
              oathContext.IsLogged && <li><Link to='/profile'>profile</Link></li>
            }
            <li><button onClick={logoutHandler}>logout</button></li>
        </ul>
    </nav>
  )
}

export default Nav