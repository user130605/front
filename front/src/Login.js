// Login.js

import React, { useState } from 'react';

function Login() {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      console.log('로그인 성공:', data);
    } catch (error) {
      console.error('에러 발생:', error.message);
    }
  };

  return (
    <div>
      <h2>로그인</h2>
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
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
