import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'


const Detail = () => {
    let { serviceId } = useParams();
    const [details, setDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    useEffect(() => {
        const foundDetail = (details.find(service => service.id == serviceId));
        setSingleDetail(foundDetail);

    }, [details])
    return (
        <div>
            <div className="container">
                <h1 className='fs-2 fw-bolder bg-warning text-success mx-auto w-50 mt-2'>{singleDetail?.name}</h1>
                <div class="cardcontainer">
                    <div class="photo">
                        <img src={singleDetail?.img} alt="" />
                        <div class="photos">Photo</div>
                    </div>
                    <div class="content">
                        <p class="txt4">{singleDetail?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;