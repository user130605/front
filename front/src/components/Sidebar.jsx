// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  tableCell: {
    paddingBottom: '10px',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'normal',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
};

function Sidebar() {
  return (
    <div style={{ width: '20%', padding: '2%', paddingTop: '5%' }}>
      <nav style={{ backgroundColor: '#99D98C', display: 'flex', justifyContent: 'center' }}>
        <table style={style.table}>
          <thead>
            <tr style={{ borderBottom: '1px solid #fff' }}>
              <td style={{ paddingTop: '10px', ...style.tableCell }}>분류</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...style.tableCell, paddingTop: '10px' }}>
                <Link to="/" style={style.link}>메인페이지</Link>
              </td>
            </tr>
            <tr>
              <td style={style.tableCell}>
                <Link to="/signup" style={style.link}>회원가입</Link>
              </td>
            </tr>
            <tr>
              <td style={style.tableCell}>
                <Link to="/signin" style={style.link}>로그인</Link>
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td style={style.tableCell}>
                <Link to="/register" style={style.link}>업소 등록하기</Link>
              </td>
            </tr>
            <tr>
              <td style={style.tableCell}>
                <Link to="/registerupdate" style={style.link}>업소 수정하기</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </div>
  );
}

export default Sidebar;
