import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import { Link } from 'react-router-dom'
import Top from '../../components/Top/Top'
import CartHeader from '../../components/Header/CartHeader'
import Footer from '../../components/Footer/Footer'
import './CartScreen.css'
import Currency from '../../components/Currency'
import Button from '../../UI/Button/Button'
import cartEmpty from '../../assets/images/cartempty.gif'

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=checkout/address')
    }

    const subTotalProduct = cartItems.reduce((accumulator, item) => accumulator + item.qty, 0)
    const amount = cartItems.reduce((accumulator, item) => accumulator + item.qty * item.price, 0)

    return (
        <>
            <div className="container">
                <Top />
                <CartHeader />
                
                <div className="cart-page mt-4">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <img src={cartEmpty} alt="empty-cart" />
                            <Link to="/">
                                <Button isPrimary>
                                    Belanja Sekarang
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="cart-item">
                            <>
                                {cartItems.map((cartItem) => (
                                    <div key={cartItem.productId} className="cart-item-list">
                                        <div className="cart-item-overview">
                                            <Link to={`/shopee/${cartItem.productId}`}>
                                                <img src={cartItem.image} alt={cartItem.nameProduct} />
                                            </Link>

                                            <Link to={`/shopee/${cartItem.productId}`}>
                                                <p>{cartItem.nameProduct}</p>
                                            </Link>
                                        </div>
                                        
                                        <Currency value={cartItem.price} />
                                    
                                        <select value={cartItem.qty} onChange={(e) => dispatch(
                                            addToCart(cartItem.productId, Number(e.target.value))
                                        )}>
                                            {[...Array(cartItem.stock).keys()].map((q) => (
                                                <option key={q + 1} value={q + 1}>
                                                    {q + 1}
                                                </option>
                                            ))}
                                        </select>
                                        
                                        <Currency value={cartItem.qty * cartItem.price} />
                                       
                                        <Button 
                                            isSecondary
                                            onClick={() => removeFromCartHandler(cartItem.productId)}
                                        >
                                            Hapus
                                        </Button>
                                    </div>
                                ))}
                            </>
                            <div className="cart-page-footer">
                                    <div className="cart-page-footer-summary">
                                        <div className="cart-page-footer-first-summary">
                                            <p>Subtotal untuk Produk ({subTotalProduct} Produk):</p>
                                            <h1>
                                                <Currency value={amount} />
                                            </h1>
                                        </div>

                                        <div className="cart-page-footer-second-summary">
                                            <small className="text-light">Total Koin Shopee akan didapatkan: 10.500 Koin</small>
                                        </div>
                                    </div>

                                    <div className="cart-page-footer-checkout">
                                        <Button 
                                            isButton
                                            isPrimary
                                            onClick={checkoutHandler}
                                        >
                                            CHECKOUT
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CartScreen
