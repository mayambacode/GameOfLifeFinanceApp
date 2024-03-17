import e from 'express';
import React from 'react';
import { useState } from 'react';


function Input() {

  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios // calls the node server
    .post("http://localhost:3000/chat", {prompt})
    .then((res) => {
      setResponse(res.data); 
    })
    .catch((err) => {
      console.error(err);
    });
  };


  return (
    <div className='input'>
      <div> 
        {/* This is calls the function */}
        <form onSubmit={handleSubmit}>   
        {/* the function where the message will be send and you will recieve response */}
        <input type='text' placeholder='Type a message...' value={prompt} onChange={(e) => setPrompt(e.target.value)} /> 
        <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Input;

