// SignUp.js

import React, { useState } from 'react';

function SignUp() {
  const [userid, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, password, username }),
      });

      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      const data = await response.json();
      console.log('회원가입 성공:', data);
    } catch (error) {
      console.error('에러 발생:', error.message);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <label>
          아이디:
          <input type="text" value={userid} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
            이름:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <button type="button" onClick={handleSignUp}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;
