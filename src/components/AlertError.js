import React from 'react';
import iconDog from '../images/alert-dog.png'
const AlertError = () =>{

    return (
        <div className="alert-content d-flex justify-content-center align-items-center">
        <img src={iconDog} alt="icon-error"/>  
        <h5 className="text-center fw-bold">Por el momento no hay perritos</h5>
        </div>
    )
};

export default AlertError;