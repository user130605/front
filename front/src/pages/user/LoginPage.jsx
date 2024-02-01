import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Layout/LoginPage.css'; // 로그인 페이지 스타일 파일 경로
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      // 로그인 로직 추가

      // 예시: 로그인 성공 시 페이지 이동
      navigate('/');
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <Container>
      <div>
        <h2>로그인</h2>
        <form>
          <div>
            <label>이메일</label>
            <input type="email" name="email" placeholder="이메일을 입력하세요." value={formData.email} onChange={handleChange} />
          </div>

          <div>
            <label>비밀번호</label>
            <input type="password" name="password" placeholder="비밀번호를 입력하세요." value={formData.password} onChange={handleChange} />
          </div>

          <button type="button" onClick={handleLogin}>
            로그인
          </button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
