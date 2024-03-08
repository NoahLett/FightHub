import './ChatInput.css';
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ChatInput = () => {

  const [message, setMessage] = useState('');

  const handleChange = e => {
    const text = e.target.innerText;
    setMessage(text);
  }

  return (
    <div className="chat-input-container">
      <div 
        contentEditable 
        className='chat-input' 
        onInput={handleChange} 
      />
      {message !== '' && <FaArrowUp className='send-icon' />}
    </div>
  )
}

export default ChatInput