import React, { useState } from 'react';

function ChatWindow() {
  const [userText, setUserText] = useState('');

  return (
    <div className="chat-window">
      <input
        type="text"
        className="form-control"
        placeholder="Введіть свою відповідь"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <button className="btn btn-primary mt-2">Підключитися</button>
    </div>
  );
}

export default ChatWindow;

