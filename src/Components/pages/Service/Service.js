import React from 'react';
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Service.css';


const Service = ({ service }) => {

    const { id, name, description, img } = service;

    return (
        <div className="service p-4 ">
            <div> <img src={img} alt="" />
                <h3>{name}</h3>

                <p className="px-3">{description}</p>
            </div>
            <div className="d-flex justify-content-center">
                <Link to={`/home/${id}`}>
                    <button className="btn btn-warning">
                        <FontAwesomeIcon icon={faPhone} /> Contact with a {name.toLowerCase()} units</button>
                </Link>
            </div>
            {

            }
        </div>
    );
};

export default Service;