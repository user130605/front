// src/components/AppRouter2.js
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const AppRouter = (props) => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    // 홈 버튼 클릭 시 페이지 새로고침
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <style>
        {`
          a {
            text-decoration: none;
            color: #333;
          }
          a:hover {
            font-weight: bold;
          }
        `}
      </style>

      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', marginRight: '20px', padding: 0 }}>
          <li style={{ marginRight: '10px' }}>
            <Link to="/" onClick={handleHomeClick}>Home</Link>
          </li>
          <li style={{ marginRight: '10px' }}> | </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/O_InterestPlace">마이페이지</Link>
          </li>
          <li style={{ marginRight: '10px' }}> | </li>
          <li>
            <Link to="/logout">로그아웃</Link>
          </li>
        </ul>
      </nav>

      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes> */}
    </div>
  );
};

export default AppRouter;