import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './CheckoutScreen.css'
import Top from '../../components/Top/Top'
import CheckoutHeader from '../../components/Header/CheckoutHeader'
import Footer from '../../components/Footer/Footer'
import Button from '../../UI/Button/Button'
import Currency from '../../components/Currency'
import PayPal from '../../assets/images/paypal.png'
import BCA from '../../assets/images/bca.png'
import BNI from '../../assets/images/bni.png'

const CheckoutScreen = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { cartItems, shippingAddress } = cart

    if(!cart.shippingAddress && !cart.cartItems.length === 0) {
        history.push('/checkout/address')
    }

    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const totalProduct = cartItems.reduce((accumaltor, item) => accumaltor + item.qty, 0)

    const amount = cartItems.reduce((accumaltor, item) => accumaltor + item.qty * item.price, 0)

    const shippingPrice = 20000

    const totalPrice = (Number(amount) + Number(shippingPrice))

    const submitHandler = (e) => {
        e.preventDefault()
        history.push('/checkout/pay')
    }

    return (
        <>
            <div className="container">
                <Top />
                <CheckoutHeader />

                <div className="page-checkout mt-4">
                    <div className="checkout-address">
                        <div className="checkout-address_header mb-3">
                            <h2>
                                <i className="fas fa-map-marker-alt" />Alamat Pengiriman
                            </h2>
                        </div>

                        <div className="checkout-address_summary">
                            <div className="checkout-address_user-detail">
                                <h1>{userInfo.name}</h1>
                                <p>({shippingAddress.telephone})</p>
                            </div>

                            <div className="checkout-address_address-detail">
                                <h3>{shippingAddress.address}, {shippingAddress.city}, {shippingAddress.province}, {shippingAddress.country} {shippingAddress.postalCode}</h3>
                            </div>

                            <div className="checkout-address_change-btn">

                                <a href="/checkout/address">UBAH</a>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-product-list mt-4">
                        <div className="checkout-product-list_header mb-4">
                            <h2>Produk Dipesan</h2>
                        </div>

                        {cartItems.map((item) => (
                            <div key={item.productId} className="checkout-product-list_items">
                                <div  className="checkout-product-list_item-detail">
                                    <img src={item.image} alt={item.nameProduct} />
                                    <h3>{item.nameProduct}</h3>
                                </div>

                                <div className="checkout-product-list_item-price">
                                    <h3><Currency value={item.price} /></h3>
                                </div>

                                <div className="checkout-product-list_item-quantity">
                                    <h3>{item.qty}</h3>
                                </div>

                                <div className="checkout-product-list_item-subtotal">
                                    <h3><Currency value={item.price * item.qty} /></h3>
                                </div>
                            </div>
                        ))}

                        <div className="checkout-product-list_shipping mt-4">
                            <div className="checkout-product-list_shipping-left">
                                <p>Opsi Pengiriman:</p>
                            </div>

                            <div className="checkout-product-list_shipping-center">
                                <h3>Reguler</h3>
                                <small>Shopee Express Standard</small>
                                <p>Pilih waktu pengiriman</p>
                                <p className="text-light">
                                    (Pengiriman berpotensi mengalami keterlambatan dikarenakan Libur)
                                </p>
                                <small className="text-light">*Gratis ongkir dengan min. belanja Rp.30000</small>
                            </div>

                            <div className="checkout-product-list_shipping-right">
                                <Currency value={shippingPrice} />
                            </div>
                        </div>

                        <div className="checkout-product-list_total mt-4">
                            <div className="checkout-product-list_total-left">
                                <p className="text-light">Total Pesanan ({totalProduct} Produk):</p>
                            </div>

                            <div className="checkout-product-list_total-right">
                                {amount > 30000 ? (
                                    <h2><Currency value={amount} /></h2>
                                ) : (
                                    <h2><Currency value={totalPrice} /></h2>
                                )}
                            </div>  
                        </div>
                    </div>

                    <div className="checkout-payment-method mt-4">
                        <div className="checkout-payment-method_top">
                            <div className="checkout-payment-method_left">
                                <h2>Metode Pembayaran</h2>
                            </div>

                            <div className="checkout-payment-method_right">
                                <div className="checkout-payment-method_options">
                                    <div className="checkout-bank-item">
                                        <input 
                                            name="paymentMethod" 
                                            type="radio" 
                                            checked 
                                            value="PayPal"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />

                                        <img src={PayPal} alt="paypal" />

                                        <div className="checkout-bank-item_title">
                                            <p>PayPal (Dicek Otomatis)</p>
                                        </div>
                                    </div>

                                    <div className="checkout-bank-item">
                                        <input name="paymentMethod" type="radio" disabled />
                                        <img src={BCA} alt="BCA" />

                                        <div className="checkout-bank-item_title">
                                            <p>Bank BCA (Dicek Otomatis)</p>
                                            <p className="text-light">Hanya menerima dari Bank BCA</p>
                                        </div>
                                    </div>

                                    <div className="checkout-bank-item">
                                        <input name="paymentMethod" type="radio" disabled />
                                        <img src={BNI} alt="BNI" />

                                        <div className="checkout-bank-item_title">
                                            <p>Bank BNI (Dicek Otomatis)</p>
                                            <p className="text-light">Hanya menerima dari Bank BNI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="checkout-payment-method_bottom mt-4">
                            <div className="payment-summary">
                                <div className="payment-summary-info">
                                    <div className="payment-summary-left mb-3">
                                        <p className="text-light">Total Koin Shopee akan didapatkan</p>
                                    </div>

                                    <div className="payment-summary-right">
                                        <p className="text-light">2000 Koin</p>
                                    </div>
                                </div>

                                <div className="payment-summary-info">
                                    <div className="payment-summary-left">
                                        <p className="text-light">Subtotal untuk Produk</p>
                                    </div>

                                    <div className="payment-summary-right">
                                        <Currency value={amount} />
                                    </div>
                                </div>

                                <div className="payment-summary-info">
                                    <div className="payment-summary-left">
                                        <p className="text-light">Total Ongkos Kirim</p>
                                    </div>

                                    <div className="payment-summary-right">
                                        {amount > 30000 ? (
                                            <del><Currency value={shippingPrice} /></del>
                                        ) : (        
                                            <Currency value={shippingPrice} />
                                        )}
                                    </div>
                                </div>

                                <div className="payment-summary-info mb-4">
                                    <div className="payment-summary-left">
                                        <p className="text-light">Total Pembayaran</p>
                                    </div>

                                    <div className="payment-summary-right">
                                        {amount > 30000 ? (
                                            <h2><Currency value={amount} /></h2>
                                        ) : (
                                            <h2><Currency value={totalPrice} /></h2>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <Button 
                                onClick={submitHandler} 
                                isPrimary 
                                isDisabled = {cartItems.length === 0}
                                disabled = {cartItems.length === 0}
                            >
                                Buat Pesanan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default CheckoutScreen
