import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { FaRegCopyright } from "react-icons/fa";
import { useState } from 'react';
import AuthModal from '../../components/AuthModal/AuthModal';

const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    setIsSignUp(true);
    setShowModal(true);
    console.log(isSignUp);
  }

  return (
    <div className='overlay'>
    <Navbar setIsSignUp={setIsSignUp} showModal={showModal} setShowModal={setShowModal} />
      <div className='home-page'>
        <h1 className='slogan'>Swipe to Fight<FaRegCopyright className='copy-right'/></h1>
        <button className='auth-button' onClick={handleClick}>
          {authToken ? 'Sign Out' : 'Create an Account'}
        </button>

        {showModal && <AuthModal setIsSignUp={setIsSignUp} isSignUp={isSignUp} setShowModal={setShowModal} />}

      </div>
    </div>
  )
}

export default Home