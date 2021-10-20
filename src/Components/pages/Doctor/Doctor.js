import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Doctor.css';

const Doctor = ({ expert }) => {
   const { name, img, expertize } = expert;
   return (
      <div className="col-lg-4 col-sm-6 col-12 doctor-card">
         <img src={img} alt="" />
         <h3>{name}</h3>
         <h5 className="text-danger">{expertize}</h5>
         <button className="btn button mb-2">   call  <FontAwesomeIcon icon={faPhone} /></button>
      </div>
   );
};

export default Doctor;