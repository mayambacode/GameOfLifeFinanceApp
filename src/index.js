import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Nessesary libraries
const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

// Server setup
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for ChatGPT
// How the frontend communicates with the backend
app.post('/chat', async (req, res) => { 

  const prompt = req.body;

  const completion = await openai.createCompletion({
    // model: ,
    // max_tokens: , 
    // tempurature: , 
    // prompt: prompt //The question well be asking the chat
  });

  res.send(completion.data.choices[0].text);
})

// Server configurations
const port = 3400;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
