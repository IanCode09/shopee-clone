import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './RegisterScreen.css'
import RegisterHeader from '../../components/Header/RegisterHeader'
import Button from '../../UI/Button/Button'
import { register } from '../../actions/userActions'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Spinner from '../../UI/Spinner/Spinner'

const RegisterScreen = ({ history, location }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [warning, setWarning] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, userInfo, error } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo || userLogin.userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect, userLogin])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setWarning('Password do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <div className="container">
            <RegisterHeader />

            <div className="register-page mt-3">
                <div className="register-page-main">
                    <form onSubmit={submitHandler}>
                        <h2>Daftar</h2>

                        {error && <ErrorMessage className="alert danger">{error}</ErrorMessage>}
                        {warning && <ErrorMessage className="alert danger">{warning}</ErrorMessage>}
                        {loading && <Spinner />}

                        <input 
                            type="text" 
                            placeholder="Enter Full Name" 
                            name="name" 
                            onChange={(e) => setName(e.target.value)}
                        />

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

                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            name="confirmPassword" 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button isPrimary>REGISTER</Button>
                        <p className="text-light mt-3">ATAU</p>

                        <div className="register-page-social-media">
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

                        <p className="mb-3">Dengan mendaftar, Anda setuju dengan <span>Syarat, Ketentuan dan Kebijakan dari Shopee & Kebijakan Privasi</span></p>

                        <p className="text-light">
                            Punya akun? {' '}
                            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen
