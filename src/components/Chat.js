import React from 'react';
import Messages from './Messages';
import Input from './Input';
function chatResponse() {

  const [response, setResponse] = useState('');
}

function Chat() {
  return (
    <div className='chat'>
      <div className='chatInfo'>
      <h2>Chat</h2>
        <span>Users Chat</span>
          <Messages/>
          <Input/>
      </div>
    </div>
  );
}

export default Chat;