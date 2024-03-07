import './ChatContainer.css';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import MatchesDisplay from '../../components/MatchesDisplay/MatchesDisplay';
import ChatDisplay from '../../components/ChatDisplay/ChatDisplay';

const ChatContainer = () => {
  return (
    <div className='chat-container'>
      <ChatHeader />
      <div className='options-buttons'>
        <button className='option'>Matches</button>
        <button className='option'>Chat</button>
      </div>
      <div className='main-chat-view'>
        <MatchesDisplay />
        <ChatDisplay />
      </div>
    </div>
  )
}

export default ChatContainer