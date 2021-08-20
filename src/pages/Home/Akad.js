import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Akad = () => {
    return (
        <div className="akad-container" id="add-wed">
            <div className="pembuka" data-aos="fade-up">
                <p>﷽</p>
            </div>
            <div className="judul" data-aos="fade-up">
                <p>Akad Nikah dan Walimatul 'Ursy</p>
            </div>
            <div className="text" data-aos="fade-up">
                <p>In sha Allah akan dilaksanakan pada :</p>
            </div>
            <div className="info" data-aos="fade-up">     
                <div className="info-judul">
                    <h2>Waktu dan Tempat</h2>                
                    <div></div>
                </div>           
                <div className="detail">
                    <div className="detail-wl">
                        <BiTimeFive size="3vmax" color="white" />
                        <p>08.00 - 21.00 WIB</p>                    
                    </div>
                    <div className="detail-wl">
                        <FaCalendarAlt size="3vmax" color="white" />
                        <p>Jum’at, 10 September 2021</p>
                    </div>
                    <div className="detail-wl">
                        <FiMapPin size="3vmax" color="white" />
                        <p>Jl. Pasanah, RT.24, kel. Sidorejo, Kec. Arut Selatan</p>
                    </div>                

                </div>
            </div>
            <div className="btn" data-aos="fade-up">
                <a           
                    target="_blank"
                    rel="noopener noreferrer" 
                    href="https://maps.app.goo.gl/1M1rokUVy2voAey99" 
                    className="btn-link"
                >
                   
                    <ImLocation size="3vmax" color="#1F1D1B" />
                    <p>Google Maps</p>
                </a>                
                <a  
                    target="_blank"
                    rel="noopener noreferrer" 
                    href="https://www.instagram.com/sumiyyatiii___/" 
                    className="btn-link"
                >
                    <FaInstagram size="3vmax" color="#1F1D1B" />
                    <p>Live Instagram</p>
                </a>            
            </div>

        </div>
    )
}

export default Akad
