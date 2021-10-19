import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';

const Register = () => {
   return (
      <div id="register" >
         <Header></Header>
         <div className="register d-flex justify-content-center  ">

            <div className="m-5 p-5 reg-input">
               <h2>Please Register</h2>
               <form >
                  <input type="email" />
                  <br /><br />
                  <input type="password" />
                  <br /><br />
                  <div className="d-flex justify-content-center align-items-center">
                     <input type="submit" value="Submit" />
                     <Link to="/login"> Already Registered?</Link>
                  </div>
               </form>

            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Register;