// LogoutPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 로그아웃 로직 추가

    // 예시: 로그아웃 후 이동할 페이지
    navigate('/'); // '/'는 로그아웃 후 이동할 페이지 경로입니다.
  }, [navigate]);

  return (
    <div>
      <h2>로그아웃 중...</h2>
      {/* 원하는 로그아웃 중인 메시지를 표시할 수 있습니다. */}
    </div>
  );
}

export default LogoutPage;
