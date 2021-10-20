import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServiceDetails.css'
import { Container, Card, Row, Col } from 'react-bootstrap';
// import Doc from '../../../404.jpg';

const ServicesDetails = () => {

   const { id } = useParams();

   const [services, setServices] = useState([]);
   const [singleService, setSingleService] = useState({});


   useEffect(() => {
      fetch('/serviceDetails.json')
         .then(res => res.json())
         // .then(data => console.log(data))
         .then(data => setServices(data))
   }, [])

   useEffect(() => {
      const foundService = services.find(service =>
         service.id === id)
      setSingleService(foundService);
      console.log(foundService);

   }, [services])

   return (
      <div className="bg-secondary">
         <Header></Header>

         <div className=" ">




            <Container className="my-5 d-flex justify-content-center">
               <Row>
                  <Col md={4}>
                  </Col>
                  <Col md={6}>
                     <Card style={{ width: '18rem' }}>

                        <Card>
                           <Card.Img variant="top" src={singleService?.img} />
                        </Card>

                        <Card.Body className="">
                           <Card.Title>{singleService?.name}</Card.Title>
                           <Card.Text>{singleService?.description}
                           </Card.Text>
                           <Link to={`/doctor`}>
                              <button className=" details-btn btn btn-warning">Emergency call<br /><FontAwesomeIcon icon={faPhone} /> <u>++10178933</u> <FontAwesomeIcon icon={faPhone} /></button>
                           </Link>

                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </div>
         <Footer></Footer>
      </div >
   );
};

export default ServicesDetails;