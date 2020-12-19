import React from 'react'
import './Top.css'
import facebookImage from '../../assets/images/sosmed/facebook.png'
import instagramImage from '../../assets/images/sosmed/instagram.png'
import lineImage from '../../assets/images/sosmed/line.png'
import notifImage from '../../assets/images/sosmed/notif.png'
import helpImage from '../../assets/images/sosmed/help.png'

const Top = () => {
    return (
        <div className="top-container">
            <div className="top-left">
                <ul className="navbar">
                    <li>Jual</li>
                    <li>Download</li>
                    <li>Ikuti Kami di</li>
                </ul>

                <div className="top-sosmed">
                    <img src={facebookImage} alt="facebook" />
                    <img src={instagramImage} alt="instagram" />
                    <img src={lineImage} alt="line" />
                </div>
            </div>

            <div className="top-right">
                <ul>
                    <li><img src={notifImage} alt="notif" />Notifikasi</li>
                    <li><img src={helpImage} alt="help" />Bantuan</li>
                    <li>Ian Lombu</li>
                </ul>
            </div>
        </div>
    )
}

export default Top
