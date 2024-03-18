import e from 'express';
import React from 'react';
import { useState } from 'react';


function Input() {


  return (
    <div className='input'>
      <div> 
        {/* This is calls the function */}
        <form >   
        {/* the function where the message will be send and you will recieve response */}
        <input type='text' placeholder='Type a message...'  /> 
        <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Input;

