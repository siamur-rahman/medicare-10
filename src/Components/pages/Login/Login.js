
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
   const { signInUsingGoogle } = useFirebase();
   return (
      <div id="login">
         <Header></Header>
         <div className="d-flex justify-content-center">
            <div>
               <h2>Please log in</h2>
               <button onClick={signInUsingGoogle} className="btn btn-warning">Sign In With Google </button>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Login;