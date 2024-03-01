import './AuthModal.css';
import { FaTimes } from "react-icons/fa";

const AuthModal = ({ setShowModal }) => {
  
    const handleClick = () => {
        setShowModal(false);
    }
    
    return (
    <div className="auth-modal">
        <div><FaTimes onClick={handleClick} className="close-button"/></div>
        <h2>Auth Modal</h2>
    </div>
  )
}

export default AuthModal