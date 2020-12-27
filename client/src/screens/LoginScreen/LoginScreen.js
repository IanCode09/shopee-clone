import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './LoginScreen.css'
import LoginHeader from '../../components/Header/LoginHeader'
import Button from '../../UI/Button/Button'
import { login } from '../../actions/userActions'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Spinner from '../../UI/Spinner/Spinner'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, userInfo, error } = userLogin

    useEffect(() => {
        if(userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div className="container">
            <LoginHeader />

            <div className="login-page mt-3">
                <div className="login-page-main">
                    <form onSubmit={submitHandler}>
                        <h2>Log In</h2>

                        {error && <ErrorMessage className="alert danger">{error}</ErrorMessage>}

                        {loading && <Spinner />}

                        <input 
                            type="text" 
                            placeholder="Enter Email" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button isPrimary>LOG IN</Button>
                        <p className="text-light mt-3">ATAU</p>

                        <div className="login-page-social-media">
                            <Button isSecondary>
                                <i className="fab fa-facebook-f" /> Facebook
                            </Button>

                            <Button isSecondary>
                                <i className="fab fa-google" /> Google
                            </Button>
                            
                            <Button isSecondary>
                                <i className="fab fa-apple" /> Apple
                            </Button>
                        </div>

                        <p className="text-light">
                            Baru di Shopee? {' '}
                            <Link to="/register">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
