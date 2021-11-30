import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";
import AlertError from './AlertError';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const CardDog = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/21")
      .then((response) => response.json())
      .then((dog) => setDogs(dog.message));
  }, []);

const alert= () => {
    return MySwal.fire({
        title: <p>Tu solicitud a sido Enviada :3</p>,
      })
    };

    if (dogs.length === 0){
        return (
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 h-100 d-flex justify-content-center">
             <AlertError />
            </Row>
            );
    }else{
        return (
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 h-100">
              {dogs.map((dog) => (
                <Col key={uuidv4()}>
                    <Card>
                    <Card.Img key={uuidv4()}  variant="top" src={dog} alt="dog-card" height="350px" width="350px" />
                    <Card.Body>
                        <div className="btn btn-adopta"  onClick={alert}>Adoptame</div>
                    </Card.Body>
                    </Card>
                </Col>
              ))}
            </Row>
    );}
};

export default CardDog;
