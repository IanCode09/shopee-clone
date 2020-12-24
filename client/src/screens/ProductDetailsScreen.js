import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Top from '../components/Top/Top'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { dataProductsDetails } from '../actions/productActions'
import Spinner from '../UI/Spinner/Spinner'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Button from '../UI/Button/Button'
import Star from '../UI/Star/Star'

const ProductDetailsScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const [qty, setQty] = useState(1)
    // console.log(qty)

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product, error } = productDetails

    useEffect(() => {
        dispatch(dataProductsDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <div className="container">
                <Top />
                <Header />
                
                <div className="product-detail">
                    {loading ? (
                        <Spinner />
                    ) : error ? (
                        <ErrorMessage className="alert danger">{error}</ErrorMessage>
                    ) : (
                        <>
                            <div className="detail-top">
                                <div>
                                    <img src={product.image} alt={product.nameProduct} />
                                </div>

                                <div className="detail-right">
                                    <h2>{product.nameProduct}</h2>
                                    <h3><Star rating={product.rating} /></h3> <span className="text-light">{product.reviews} Penilaian</span>

                                    <div className="price-info">
                                        <h1>Rp.{product.price}</h1>
                                        <p>Shopee Garansi 100% ori</p>
                                        <p className="text-light">Garansi uang kembali jika produk tidak ori</p>
                                    </div>

                                    <div className="shopee-info">
                                        <div className="left-info">
                                            <p className="text-light">Koin</p>
                                            <p className="text-light">Pengiriman</p>
                                            <p className="text-light">Kuantitas</p>
                                        </div>

                                        <div className="right-info">
                                            <div className="shopee-coin">
                                                <i className="fas fa-coins"></i><span>Beli dan dapatkan <span style={{ color: 'yellow' }}>10.000</span> Koin Shopee</span>
                                            </div>
                                            <div className="shopee-free">
                                                <i className="fas fa-shipping-fast"></i><span>Gratis ongkir dengan min. belanja Rp.30000</span>
                                            </div>

                                            {product.stock > 0 ? (
                                                <select value={qty}
                                                onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.stock).keys()].map((q) => (
                                                        <option key={q + 1} value={q + 1}>
                                                            {q + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <p>Maaf stok habis</p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {product.stock === 0 ? (
                                        <Button type="button" isDisabled={product.stock === 0}>
                                            Masukkan Keranjang
                                        </Button>
                                    ) : (
                                        <Button type="button" isSecondary>
                                            Masukkan Keranjang
                                        </Button>
                                    )}

                                    {product.stock === 0 ? (
                                        <Button type="button" isDisabled disabled={product.stock === 0}>
                                            Beli Sekarang
                                        </Button>
                                    ) : (
                                        <Button 
                                            onClick={addToCartHandler}
                                            type="button" 
                                            isPrimary
                                        >
                                            Beli Sekarang
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <div className="detail-bottom">
                                <h3>Spesifikasi Produk</h3>
                                <div className="spesifikasi-main mt-4">
                                    <div className="spesifikasi-left text-light">
                                        <p>Kategori</p>
                                        <p>Merek</p>
                                        <p>Stok</p>
                                        <p>Dikirim Dari</p>
                                    </div>

                                    <div className="spesifikasi-right">
                                        <p style={{ color: 'rgb(89, 89, 201)' }}>{product.categories}</p>
                                        <p style={{ color: 'rgb(89, 89, 201)' }}>{product.merk}</p>
                                        <p>{product.stock}</p>
                                        <p>{product.address}</p>
                                    </div>
                                </div>

                                <h3 className="mb-4 mt-4">Deskripsi Produk</h3>
                                <p className="text-light">{product.description}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductDetailsScreen
