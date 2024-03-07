import './ChatDisplay.css'
import Chat from '../Chat/Chat';
import ChatInput from '../ChatInput/ChatInput';

const ChatDisplay = () => {
  return (
    <div className='chat-display-container'>
      <Chat />
      <ChatInput />
    </div>
  )
}

export default ChatDisplay