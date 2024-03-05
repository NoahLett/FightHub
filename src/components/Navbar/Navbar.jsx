import './Navbar.css';

const Navbar = ({ minimal, showModal, setShowModal, setIsSignUp }) => {

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  }

  const authToken = true;

  return (
    <nav className='nav-container'>
      <div className="logo-container">
        <img className='logo-img' src="/images/boxing-gloves.png" alt="Boxing Gloves" />
        <span className={`logo-text ${minimal ? 'is-dark' : ''}`}>FightHub</span>
      </div>
      <div className="nav-buttons">
        {!authToken && !minimal && <button disabled={showModal} onClick={handleClick} className='nav-button'>Sign In</button>}
      </div>
    </nav>
  )
}

export default Navbar