
import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';
import Register from '../ReGister/Register';

const Login = () => {
   // const { signInUsingGoogle } = useFirebase();
   return (
      <div id="login" >
         <Header></Header>
         <div className="d-flex justify-content-center login">
            <div>
               <Register></Register>
               {/* <h2 className="mb-3">Please log in first</h2>
               <button onClick={signInUsingGoogle} className="btn btn-warning mb-2"> Sign In With Google </button><br /> */}
               {/* <Register></Register> */}

            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Login;