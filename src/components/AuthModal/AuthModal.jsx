import './AuthModal.css';
import AuthForm from '../AuthForm/AuthForm';
import { FaTimes } from "react-icons/fa";
import { useEffect } from 'react';

const AuthModal = ({ setShowModal, isSignUp }) => {
  
    const handleClick = () => {
        setShowModal(false);
    }
    
    return (
    <div className="auth-modal">
        <div className='close-button-container'>
            <FaTimes onClick={handleClick} className="close-button"/>
        </div>
        <h2 className='auth-modal-header'>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
        <p className='disclaimer'>By clicking Sign In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
        <AuthForm isSignUp={isSignUp} />
    </div>
  )
}

export default AuthModal