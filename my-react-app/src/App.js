import React from 'react';
import Navbar from './components/Navbar';
import ChatWindow from './components/ChatWindow'; // Містить основне поле для чату
import VideoChat from './components/VideoChat'; // Відео-чат
import Avatar from './components/Avatar'; // Аватар
import Controls from './components/Controls'; // Мікрофон, камера

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <h1>Тут буде відповідь ChatGPT</h1>
        <ChatWindow /> {/* Поле для чату */}
        <Avatar /> {/* Аватар */}
        <Controls /> {/* Кнопки для мікрофона і камери */}
      </div>
      <VideoChat /> {/* Відео-чат */}
    </div>
  );
}

export default App;
