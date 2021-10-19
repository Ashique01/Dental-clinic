import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Detail from '../Detail/Detail';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='bg-success text-warning text-center mt-5'>Want Pain Free Treatment</h1>
            <section>
                <Row xs={1} md={2} className="mx-5  g-4 justify-content-center">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </section>

        </div>
    );
};

export default Services;