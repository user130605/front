import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PopupWithInput from './PopupWithInput';
import styled from 'styled-components';
import './DetailPage.css';
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    backgroundColor: '#D1E8C4',
  },
  tableCell: {
    padding: '12px 16px',
  },
  
};

export default function DetailPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] =  useState(false);
  const Star = ({ selected, starSize }) => (
    <span
      style={{
        cursor: 'default', // 클릭할 수 없도록 커서 비활성화
        color: selected ? 'orange' : 'gray',
        fontSize: starSize || '24px',
      }}
    >
      &#9733;
    </span>
  );
  function handleClick() {
    updateInterest();
  }

  async function updateInterest() {
    const url = 'http://localhost:3001/myinterest'; // PUT 요청을 보낼 엔드포인트
    const data = {  interest: true  }; // 업데이트할 데이터
    if (!isLoading) {
      setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        alert('Network response was not ok');
        throw new Error('Network response was not ok');
      }
      alert('관심장소가 추가되었습니다');
      setIsLoading(false);
      console.log('Interest updated successfully!');
    } catch (error) {
      console.error('Error updating interest:', error);
    }
  }
  }

  const handleReviewAdded = () => {
    fetchData(); // 리뷰 추가 후에 데이터를 다시 가져와서 업데이트
  };

  useEffect(() => {
    fetchData(); // 초기 데이터 가져오기
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/detailpage")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  };

  const customStyles = {
    closeButton: {
        alignSelf: 'flex-end', 
        marginTop: '10px',
      },
  };

  if (data.length === 0) {
    return <span >Loading...</span>;
  }

  return (
    <div>
      {data.map((item) => (
        <div className="detail" key={item.id}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {item.image && <img src={`data:image/png;base64,${item.image}`} alt="Item Image" style={{ width: '700px', height: '500px', marginRight: '50px'}}/>}
          <div>
            <h1>{item.name}</h1>
            <button onClick={handleClick}>+ 관심장소</button>
            <p>({item.group})</p>
            <p>연락처: {item.contact}</p>
            <p>주소: {item.address}</p>
            <p>{item.detail}</p>
            <p>평점: {item.averagegrade}</p>
          </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <h3 style={{ marginRight: '1rem' }}>리뷰 ({item.review.length}개)</h3>
  <div style={{ marginLeft: 'auto' }}>
    <PopupWithInput onReviewAdded={handleReviewAdded} />
  </div>
</div>
<div style={{ paddingTop: '5px' }}>
<table style={styles.table}>
  <thead style={ styles.tableHead }>
    <tr>
    <th style={{...styles.tableCell, width: '10%'}}>목록</th>
      <th style={{...styles.tableCell, width: '20%'}}>Email</th>
      <th style={{...styles.tableCell, width: '30%'}}>내용</th>
      <th style={{...styles.tableCell, width: '20%'}}>평점</th>
    </tr>
  </thead>
  <tbody>
    {item.review.map((review) => (
      <tr key={review.id} style={{ borderBottom: item.review.id ? '1px solid #D5E8CE' : 'none' }}>
        <td style={{...styles.tableCell, width: '10%'}}>{review.id}</td>
        <td style={{...styles.tableCell, width: '20%'}}>{review.email}</td>
        <td style={{...styles.tableCell, width: '30%'}}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {review.image && (
      <img src={`data:image/png;base64,${review.image}`} alt="Review Image" style={{ width: '300px', height: '200px', marginRight: '10px' }}/>
    )}
    <div>{review.detail}</div>
  </div>
</td>
        <td style={{...styles.tableCell, width: '20%'}}>
          {[...Array(review.grade)].map((_, index) => (
            <Star
              key={index}
              selected={true} // review.grade로 지정된 수만큼의 별을 선택 상태로 설정
              starSize={customStyles.closeButton}
            />
          ))}
          {[...Array(5 - review.grade)].map((_, index) => (
            <Star
              key={review.grade + index}
              selected={false} // 나머지 별은 선택되지 않은 상태로 설정
              starSize={customStyles.closeButton}
            />
          ))} {review.grade}
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
        </div>
      ))}
    </div>
  );
}