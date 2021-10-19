import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div id='doctors'>
            <h1 className='bg-success text-warning text-center mt-5 fs-1'>Our Doctors</h1>
            <section>
                <Row xs={1} md={2} className="mx-5  g-4 justify-content-center">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </section>

        </div>
    );
};

export default Doctors;