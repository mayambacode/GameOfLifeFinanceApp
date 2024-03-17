import React from 'react';
import Messages from '../components/Messages';
import Input from '../components/Input';
import { useState } from 'react';

function Chat() {

  const [response, setResponse] = useState('');

  return (
    <div className='chat'>
      <div className='chatInfo'>
      <h2>Chat</h2>
        <span>Users Chat</span>
          <Messages/>
          <Input/>
          <div>
            <h3>Response:</h3>
            <p>{response}</p> {/*Where ChatGPT is supposed to respond*/}
          </div>
      </div>
    </div>
  );
}

export default Chat;