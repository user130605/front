// Headerbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function Headerbar() {
    
  return (
    <header style={{ display: 'flex', alignItems: 'center', 
    justifyContent: 'space-between', borderBottom: '1px solid #99D98C' }}>
      <img src={process.env.PUBLIC_URL + '/logo.png'} style={{ margin:'20px 20px', width: '200px', height: '100px' }} />
      {/* 상단 네비게이션 */}
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
            <Link to="/mainpage">Home</Link>
          </li>
          <li style={{ marginRight: '10px' }}> | </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/mypage">마이페이지</Link>
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
    </header>
  );
}

export default Headerbar;
