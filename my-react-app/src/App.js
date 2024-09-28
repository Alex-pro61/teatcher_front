import React from 'react';
import Navbar from './components/Navbar';
import ChatWindow from './components/ChatWindow';
import VideoChat from './components/VideoChat';
import Avatar from './components/Avatar';
import Controls from './components/Controls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChatWindow />
      <VideoChat />
      <Avatar />
      <Controls />
    </div>
  );
}

export default App;

