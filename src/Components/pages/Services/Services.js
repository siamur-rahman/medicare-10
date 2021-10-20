import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

import './Services.css';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('services.json')
         .then(res => res.json())
         .then(data => setServices(data));
   }, [])

   return (
      <div id="services " >
         <h2 className=" ms-5 mt-5 d-flex justify-content-center">Our services</h2>
         <hr />
         <div className="service-container">
            {
               services.map(service => <Service
                  key={service.id}
                  service={service}
               ></Service>
               )
            }

         </div>

      </div>
   );
};

export default Services;