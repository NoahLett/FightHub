import './ChatHeader.css';

const ChatHeader = () => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="profile-img-container">
          <img className='profile-img' src="/images/fighter-1.jpeg" alt="" />
        </div>
        <h3 className='profile-username'>Username</h3>
      </div>
    </div>
  )
}

export default ChatHeader