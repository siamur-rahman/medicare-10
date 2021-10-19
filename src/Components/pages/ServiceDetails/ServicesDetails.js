import React from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServiceDetails.css'

const ServicesDetails = () => {


   return (
      <div className="bg-secondary">
         <Header></Header>

         <div className=" details d-flex justify-content-center  bg-secondary ">
            <Link to={`/doctor`}>
               <button className="btn btn-warning">Emergency call<FontAwesomeIcon icon={faPhone} /> ++10178933<FontAwesomeIcon icon={faPhone} /></button>
            </Link>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ServicesDetails;