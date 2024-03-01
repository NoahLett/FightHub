import './Navbar.css';

const Navbar = ({ authToken, minimal, showModal, setShowModal }) => {

  const handleClick = () => {
    setShowModal(true);
  }

  return (
    <nav className='nav-container'>
      <div className="logo-container">
        <img className='logo-img' src="/images/boxing-gloves.png" alt="Boxing Gloves" />
        <span className='logo-text'>FightHub</span>
      </div>
      <div className="nav-buttons">
        {!authToken && !minimal && <button disabled={showModal} onClick={handleClick} className='nav-button'>Sign In</button>}
      </div>
    </nav>
  )
}

export default Navbar