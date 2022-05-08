import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { Oathcontext } from "./store/AuthContext";
import { useNavigate } from "react-router";

function App() {
 //context
 const oathContext = useContext(Oathcontext);



  return (
    <>
      <BrowserRouter>
        <Nav/>      
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/auth" element={<Auth/>}/>
          { 
            oathContext.IsLogged && <Route path="/profile" element={<Profile/>}/>

          }
        
            
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
