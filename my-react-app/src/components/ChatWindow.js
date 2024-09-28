import React, { useState } from 'react';

const ChatWindow = () => {
  const [teacherText, setTeacherText] = useState('');
  const [studentText, setStudentText] = useState('');

  return (
    <div className="chat-window">
      <div className="teacher-chat">
        <p>{teacherText || "Тут буде відповідь ChatGPT"}</p>
      </div>
      <div className="student-chat">
        <input 
          type="text" 
          placeholder="Введіть свою відповідь" 
          value={studentText}
          onChange={(e) => setStudentText(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default ChatWindow;
