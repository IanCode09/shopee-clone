import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CheckoutAddressScreen.css'
import Top from '../../components/Top/Top'
import CheckoutHeader from '../../components/Header/CheckoutHeader'
import Button from '../../UI/Button/Button'
import { addShippingAddress } from '../../actions/cartActions'

const CheckoutAddressScreen = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [province, setProvince] = useState(shippingAddress.province)
    const [city, setCity] = useState(shippingAddress.city)
    const [address, setAddress] = useState(shippingAddress.address)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [telephone, setTelephone] = useState(shippingAddress.telephone)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addShippingAddress({ province, city, address, postalCode, country, telephone}))
        history.push('/checkout/state')
    }

    return (
        <div className="container">
            <Top />
            <CheckoutHeader />

            <div className="address-page-main mt-4">
                <h2>Alamat Pengiriman</h2>

                <div className="address-page mt-3">
                    <div className="address-page-detail">
                        <form onSubmit={submitHandler}>
                            <input 
                                type="text" 
                                placeholder="Enter Province" 
                                name="province" 
                                required
                                onChange={(e) => setProvince(e.target.value)}
                            />

                            <input 
                                type="text" 
                                placeholder="Enter City" 
                                name="city" 
                                required
                                onChange={(e) => setCity(e.target.value)}
                            />

                            <input 
                                type="text" 
                                placeholder="Enter Address" 
                                name="address" 
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            <input 
                                type="text" 
                                placeholder="Enter Postal Code" 
                                name="postalCode" 
                                required
                                onChange={(e) => setPostalCode(e.target.value)}
                            />

                            <input 
                                type="text" 
                                placeholder="Enter Country" 
                                name="country" 
                                required
                                onChange={(e) => setCountry(e.target.value)}
                            />

                            <input 
                                type="text" 
                                placeholder="Enter Telephone Number" 
                                name="telephone" 
                                required
                                onChange={(e) => setTelephone(e.target.value)}
                            />

                            <Button isPrimary isSubmit>
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutAddressScreen
