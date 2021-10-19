import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div>

            <footer class="footer-distributed">
                <div class="footer-left">
                    <h3><span>AM Dental </span>Clinic</h3>
                    <p class="footer-links">
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                    </p>

                    <p class="footer-company-name">Developed By <span className='text-danger'>ASH</span> &copy; 2021</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>West Shewrapara</span> Dhaka, Banglades</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>01626484567</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="ashiquemurad@gmail.com">ashiquemurad@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the Dental Clinic</span>
                        AM Dental Clinic will give you the best pain free treatment with our modern equipment.So come and visit us if you are facing problem in your teeth
                    </p>

                    <div class="footer-icons">

                        <a href="https://www.facebook.com/ashique.murad.5/"><i class="fa fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/ashique-murad-07834b120/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Ashique01"><i class="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Footer;