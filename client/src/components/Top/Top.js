import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Top.css'
import facebookImage from '../../assets/images/sosmed/facebook.png'
import instagramImage from '../../assets/images/sosmed/instagram.png'
import lineImage from '../../assets/images/sosmed/line.png'
import notifImage from '../../assets/images/sosmed/notif.png'
import helpImage from '../../assets/images/sosmed/help.png'
import { logout} from '../../actions/userActions'

const Top = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

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

                    {userInfo ? (
                        <>
                            <li>
                                {userInfo.name} | <span onClick={logoutHandler}>Log Out</span>
                            </li> 
                            
                        </>
                        
                    ) : (
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    )}
                    
                </ul>
            </div>
        </div>
    )
}

export default Top
