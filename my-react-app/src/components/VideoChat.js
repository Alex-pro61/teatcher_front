import React, { useState } from 'react';

const VideoChat = () => {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(true);
    // Логіка для підключення до відеозв'язку
  };

  const handleDisconnect = () => {
    setConnected(false);
    // Логіка для відключення відеозв'язку
  };

  return (
    <div className="video-chat">
      {connected ? (
        <div>
          <video autoPlay></video>
          <button onClick={handleDisconnect}>Відключитися</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Підключитися</button>
      )}
    </div>
  );
};

export default VideoChat;
