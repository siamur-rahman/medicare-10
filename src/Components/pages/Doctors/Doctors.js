import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Doctors.css';


import doc1 from '../../../doctors/doc-1.jpg';
import doc2 from '../../../doctors/doc-2.jpg'
import doc3 from '../../../doctors/doc-3.jpg'
import doc4 from '../../../doctors/doc-4.jpg'
import Doctor from '../Doctor/Doctor';


const experts = [
   {
      img: doc1,
      name: 'Dr.Amena',
      expertize: 'Special Cardiologists'
   },
   {
      img: doc2,
      name: 'Dr.ROHIMA',
      expertize: 'Neurologists'
   },
   {
      img: doc3,
      name: 'Dr.Zakaria Smith',
      expertize: 'Dermatology'
   },
   {
      img: doc4,
      name: 'Dr. Sakib Anderson',
      expertize: 'Orthopaedics'
   },
]

const Doctors = () => {
   return (
      <div id="doctor" className="doctor">
         <Header></Header>
         <div className="container mb-5">
            <h2 className="text-primary m-3">Specialist</h2>
            <div className="row">
               {
                  experts.map(expert => <Doctor
                     key={expert.name}
                     expert={expert}
                  >

                  </Doctor>)
               }
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Doctors;
