import React from 'react'
import './Footer.css'
import Barcode from '../../assets/images/barcode.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <h4>LAYANAN PELANGGAN</h4>
                <ul>
                    <li><a href="#bantuan" className="text-light">Bantuan</a></li>
                    <li><a href="#metodepembayaran" className="text-light">Metode Pembayaran</a></li>
                    <li><a href="#shopeepay" className="text-light">ShopeePay</a></li>
                    <li><a href="#koinshopee" className="text-light">Koin Shopee</a></li>
                    <li><a href="#hubungikami" className="text-light">Hubungi Kami</a></li>
                </ul>
            </div>

            <div className="footer-center">
                <h4>JELAJAHI SHOPEE</h4>
                <ul>
                    <li><a href="#about" className="text-light">Tentang Kami</a></li>
                    <li><a href="#career" className="text-light">Karir</a></li>
                    <li><a href="#policies" className="text-light">Kebijakan Shopee</a></li>
                </ul>
            </div>

            <div className="footer-center">
                <h4>DOWNLOAD APLIKASI SHOPEE</h4>
                <img src={Barcode} alt="barcode" />
            </div>
        </footer>
    )
}

export default Footer
