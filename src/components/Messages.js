import React from 'react';
import Message from './Message';

function Message() {
  return (
    <div className='messages'>
      <div className='messageInfo'>
        <span>Users Chat</span>
          <h2>Message</h2>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
      </div>
    </div>
  );
}