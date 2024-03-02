import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';
const steps = [
  {
    id: '0',
    message: 'Welcome to our chatbot! How can I assist you today?',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: 'Thank you for your message! Our team will get back to you shortly.',
    end: true,
  },
];
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <div >
        <ChatBot steps={steps} 
        floating={true}/>
      </div>
  </React.StrictMode>,
)
