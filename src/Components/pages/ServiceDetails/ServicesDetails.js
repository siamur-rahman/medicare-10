import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServiceDetails.css'

const ServicesDetails = () => {
   const { id } = useParams();


   return (
      <div className="bg-secondary">
         <Header></Header>
         <h2>this is no: {id}</h2>

         <div className=" details d-flex justify-content-center  bg-secondary ">
            <Link to={`/doctor`}>
               <button className="btn btn-warning">Emergency <FontAwesomeIcon icon={faPhone} /> ++10178933<FontAwesomeIcon icon={faPhone} /></button>
            </Link>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ServicesDetails;