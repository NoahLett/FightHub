import './ChatInput.css';
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

const ChatInput = () => {

  const [textArea, setTextArea] = useState('');

  return (
    <div className="chat-input-container">
      <textarea className='chat-input' value={textArea} onChange={() => setTextArea(e.target.value)} />
      <IoMdSend className='send-icon' />
    </div>
  )
}

export default ChatInput