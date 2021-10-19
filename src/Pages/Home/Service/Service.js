import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, id } = service;

    return (
        <div id='services'>
            <Col>
                <Card className='style-service'>
                    <Card.Img className='image-style-service mx-auto img-style ' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center text-white fw-bolder fs-3'><span className='text-danger'>{name.toUpperCase()}</span></Card.Title>
                        <Card.Text className='text-center text-dark fw-bolder fs-5'>Price: <span className='text-success'>{price}</span></Card.Text>
                        <Link to={`/detail/${id}`}>
                            <button className='btn btn-warning rounded-pill fw-bolder' >Click For More Details</button>
                        </Link>
                    </Card.Body>

                </Card>
            </Col>
            {

            }

        </div>

    );
}

export default Service;