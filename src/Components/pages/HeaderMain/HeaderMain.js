import React from 'react';
import { Carousel } from 'react-bootstrap';
import Doc from '../../../doctors/doc-1.jpg';
import Doc1 from '../../../doctors/doc-2.jpg';
import Doc2 from '../../../doctors/doc-3.jpg';
import './HeadrMain.css';


const HeaderMain = () => {
   return (
      <main style={{ height: '750px' }} className=" header-container my-row  p-2 w-100">

         <div className="col-md-12 col-lg-4  offset-md-1   fw-bolder text-white">

            <h1>Excellence in <span style={{ color: '#F08568  ' }}>MEDI CARE </span></h1>

            <h4>Hospitals needs of Cuyahoga with <br />our  County for more than 110 years</h4><br /><br />
            <p className='text-white '>We are a fully accredited hospital by The Joint Commission, with a certified Level II Trauma Center. Cleveland Clinic Cancer Center at Fairview Hospital Moll Pavilion, located directly across the street from our main building…!</p>
            <a href="#book-ride" style={{ backgroundImage: 'linear-gradient(to left,#3645B1 , #1F2DD8,#1FA8D8 ,#1F73D8  )' }} className="btn btn-lg fw-bolder text-white">Services</a>
         </div>

         <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-white">

            <Carousel className="text-secondary">
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={Doc}
                     alt="First slide"
                  />
                  <Carousel.Caption >
                     <h4 >Dr. Maria</h4>
                     <p>MBBS, MD(Derma), DNB(Derma and Venereology)
                     </p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={Doc1}
                     alt="Second slide"
                  />

                  <Carousel.Caption>
                     <h4 >Dr.Asma begum</h4>
                     <p>MBBS, MD (DVL), DNB, Fellow (Dermatosurgery and Lasers)</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={Doc2}
                     alt="Third slide"
                  />

                  <Carousel.Caption >
                     <h4 >Dr.Abdur Rahman</h4>
                     <p>MBBS, MD.DMC/ MCI/UP= 52628/53947/5137</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </div>
      </main>
   );
};

export default HeaderMain;