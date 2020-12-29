import React from 'react'
import './PayScreen.css'
import Top from '../../components/Top/Top'
import CheckoutHeader from '../../components/Header/CheckoutHeader'
import PayAnimation from '../../assets/images/pay_success.gif'

const PayScreen = () => {
    return (
        <div className="container">
            <Top />
            <CheckoutHeader />

            <div className="pay-main mt-4">
                <img src={PayAnimation} alt="pay" />
                <h3>Silahkan cek email untuk melakukan pembayaran</h3>
            </div>
        </div>
    )
}

export default PayScreen
