import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, img, description } = doctor

    return (
        <div>
            <Col className='mt-5'>
                <Card className='doctor-style'>
                    <Card.Img className='image-style' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center fw-bolder fs-3 text-success'>Name: <span className='text-danger'>{name.toUpperCase()}</span></Card.Title>
                        <Card.Text className='text-center text-dark fw-bolder fs-6'><span className='text-primary'>{description}</span></Card.Text>
                    </Card.Body>
                </Card>
            </Col>


        </div >
    );
};

export default Doctor;
