import React from 'react'
import './Header.css'
import facebookImage from '../../assets/images/sosmed/facebook.png'
import instagramImage from '../../assets/images/sosmed/instagram.png'
import lineImage from '../../assets/images/sosmed/line.png'
import notifImage from '../../assets/images/sosmed/notif.png'
import helpImage from '../../assets/images/sosmed/help.png'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <ul className="navbar">
                    <li>Jual</li>
                    <li>Download</li>
                    <li>Ikuti Kami di</li>
                </ul>

                <div className="header-sosmed">
                    <img src={facebookImage} alt="facebook" />
                    <img src={instagramImage} alt="instagram" />
                    <img src={lineImage} alt="line" />
                </div>
            </div>

            <div className="header-right">
                <ul>
                    <li><img src={notifImage} alt="notif" />Notifikasi</li>
                    <li><img src={helpImage} alt="help" />Bantuan</li>
                    <li>Ian Lombu</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
