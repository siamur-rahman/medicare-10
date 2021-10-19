import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



import doc1 from '../../../doctors/doc-1.jpg';
import doc2 from '../../../doctors/doc-2.jpg'
import doc3 from '../../../doctors/doc-3.jpg'
import doc4 from '../../../doctors/doc-4.jpg'
import Doctor from '../Doctor/Doctor';


const experts = [
   {
      img: doc1,
      name: 'Andrew Smith',
      expertize: 'Special Cardiologists'
   },
   {
      img: doc2,
      name: 'John Anderson',
      expertize: 'Neurologists'
   },
   {
      img: doc3,
      name: 'Zakaria Smith',
      expertize: 'Dermatology'
   },
   {
      img: doc4,
      name: 'Sakib Anderson',
      expertize: 'Orthopaedics'
   },
]

const Doctors = () => {
   return (
      <div id="doctor" className="bg-secondary">
         <Header></Header>
         <div className="container">
            <h2 className="text-primary mt-5">Special Doctors</h2>
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
